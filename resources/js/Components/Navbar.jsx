import React, { useState, useEffect } from 'react';
import { mylogo, handpointer,PhoneNumber,LocationIcon,EmailIcon,FacebookIcon,TwitterIcon,GithubIcon,LinkedInIcon,SlackIcon } from '@/assets';
import { Linkss } from '.';
import Hamburger from 'hamburger-react';
import { motion, AnimatePresence } from 'framer-motion';
import $ from 'jquery';
import axios from 'axios';
import toastr from 'toastr';
import 'toastr/toastr.scss';
import { HashLoader } from 'react-spinners';

toastr.options = {
  "positionClass": "toast-top-center",
  "preventDuplicates": true,
  "closeButton": true,
  "progressBar": true
}
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [loading,setLoading] = useState(false);
  const [contactme, setContactMe] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const cursorWidth = window.innerWidth;
  const cursorHeight = window.innerHeight;

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  }

  useEffect(() => {
    $(window).on('mousemove', handleMouseMove);

    return () => {
      $(window).off('mousemove', handleMouseMove);
    }
  }, []);

  let centerPosition = {
    x: cursorPosition.x - cursorWidth /6.1,
    y: cursorPosition.y - cursorHeight /1.106,
  };




  const openContact = () => {
    setContactMe(true);
    $('*').css('cursor', 'auto');
  }

  const closeContact = () => {
    setContactMe(false);
    $('*').css('cursor', 'auto');
  }
  const Submission = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);


    axios.post('/{any}/contact', formData)
    .then((response) => {
      setLoading(false);
      console.log(response.data);
      console.log("Success");
      toastr.success('Your form is submitted and he will be informed and Email you back');

    })
    .catch((err) => {
      setLoading(false);
      console.log(err);
      toastr.error("Error");
    });
  }




  return (
    <>

      <div className='w-full p-8 flex font-light drop-shadow-md text-white '>

        {loading &&
        <div className="fixed top-0 lef-0 w-[100vw] h-[100vh] flex justify-center items-center z-50">
          <HashLoader
          color={"#EEB722"}
          loading={loading}
          size={50}
        />
        </div>
        }





        <div className="w-full flex items-center">
            <span className='textgradient font-bold ml-16 text-lg'>CraftyCoder &#123;&#125;</span>
        </div>
        <div className="w-full md:flex hidden justify-end items-center ">
          <div className="  rounded-lg">
            <Hamburger toggled={isOpen} color='black' rounded toggle={setOpen} />
          </div>
        </div>
        {isOpen && <div className=' w-[90vw] bg-white h-[40vh] fixed top-[13vh] right-[5vw] hidden md:flex '>
          <div className="w-full ">
          <Linkss
              openContact={openContact}
          />
          </div>
          </div>}
          <div    className='md:hidden w-full '>
              <Linkss

              openContact={openContact}

              />
      </div>
      <div className="w-full flex justify-end items-center  pr-16 ">
    <button onClick={openContact} className='text-[0.8rem] p-1 bg-transparent h-[30px] w-[120px] border-gradient'>
        Contact Me
    </button>
</div>
   {/* <motion.img
                animate={{ cursorPosition }}
                transition={{
                  duration:2,
                  delay:0.3,
                  ease: [0, 0.71, 0.2, 1.01]

                }}

                className='md:h-[20vh] md:w-[10vw] h-[25vh] grayscale rotate-[330deg] z-30 md:hidden' src={handpointer} alt="Cursor" style={{ position: 'absolute', left: centerPosition.x, top: centerPosition.y, pointerEvents: 'none' }} /> */}


      </div>

      <AnimatePresence>
        {contactme && (

          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{  opacity: 0 }}
            transition={{
              duration: 2,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            className="w-[950px] z-[50] bg-black h-[50vh] fixed left-[25vw] rounded-lg p-2 shadow-custom2 top-[25vh] block"
          >
 {/* bg-[#0D0D0D]  */}
            <div className="w-full p-4 flex justify-end ">
              <motion.button
                onClick={closeContact}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='text-white cursor-none'
              >
                X
              </motion.button>

            </div>


            <div className="grid grid-cols-3 h-3/4 w-full ">
              <div className=" flex w-full  items-center justify-start">
                <h4 className='textgradient3 ml-12 font-bold'>Let’s discuss something cool!</h4>
             </div>

              <div className="grid grid-rows-3 p-12 border-gradient-l">
                    <div className="flex items-center space-x-4">
                        <img className='w-[30px]' src={PhoneNumber} alt="" />
                        <div className="flex w-full flex-col ">

                        <span className='font-bold'>Contact Me</span>
                        <span className='font-thin text-[#8E8E8E] text-xs'>+639515319834</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <img className='w-[30px]' src={LocationIcon} alt="" />
                        <div className="flex w-full flex-col ">

                        <span className='font-bold'>Find Me</span>
                        <span className='font-thin text-[#8E8E8E] text-xs'>Davao City, Philippines</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                    <img className='w-[30px]' src={EmailIcon} alt="" />
                        <div className="flex w-full flex-col ">

                        <span className='font-bold'>Email Me</span>
                        <span className='font-thin text-[#8E8E8E] text-xs'>andredandayaganon@gmail.com</span>
                        </div>
                    </div>



              </div>

              <div className="border-gradient-l flex flex-col justify-center items-center  space-y-4">
                <span>Follow Me</span>
                <div className="flex space-x-5">
                    <img src={FacebookIcon} alt="" />
                    <img src={TwitterIcon} alt="" />
                    <img src={GithubIcon} alt="" />
                    <img src={LinkedInIcon} alt="" />
                    <img src={SlackIcon} alt="" />
                </div>
              </div>


              </div>



          </motion.div>

        )}
      </AnimatePresence>


    </>
  )
}

export default Navbar;
