import React, { useState, useEffect } from 'react';
import { mylogo, handpointer } from '@/assets';
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
  console.log(`Screen Width: ${cursorWidth}px`);
  console.log(`Screen Width: ${cursorHeight}px`);
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
    $('*').css('cursor', 'none');
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

      <div className='w-full p-8 bg-white  text-black flex font-bold drop-shadow-md border'>

        {loading &&
        <div className="fixed top-0 lef-0 w-[100vw] h-[100vh] flex justify-center items-center z-50">
          <HashLoader
          color={"#EEB722"}
          loading={loading}
          size={50}
        />
        </div>
        }





        <div className="w-full  ">
          <img className='rounded-full w-12 h-12 ml-[3vw]' src={mylogo} alt="sample" />
        </div>
        <div className="w-full md:flex hidden justify-end items-center ">
          <div className="  rounded-lg">
            <Hamburger toggled={isOpen} color='black' rounded toggle={setOpen} />
          </div>
        </div>
        {isOpen && <div className=' w-[90vw] bg-white h-[40vh] fixed top-[13vh] right-[5vw] hidden md:flex'>
          <div className="w-full ">
          <Linkss
              openContact={openContact}
          />
          </div>
          </div>}
          <div    className='md:hidden w-full h-full'>
              <Linkss

              openContact={openContact}

              />
      </div>
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
            className="w-[90vw] z-[50]   bg-white h-[80vh] fixed left-[5vw] rounded-lg p-2 shadow-custom2 top-[15%] block"
          >

            <div className="w-full p-4 flex justify-end ">
              <motion.button
                onClick={closeContact}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='text-black cursor-none'
              >
                X
              </motion.button>

            </div>
            <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}

            transition={{
              duration: 2,
              delay: 1,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            className="w-full flex flex-col items-center justify-center space-y-12">

              <div className="text-black "> <h2>CONTACT ME</h2></div>

                <div className="w-1/2">

                <form onSubmit={Submission} className='flex flex-col items-center space-y-6 cursor-none  text-black'>
                  <input name='names' className='rounded-lg cursor-none' type="text" placeholder='Name' />
                  <input name='emails' className='rounded-lg cursor-none' type="text" placeholder='Email' />
                  <textarea name="messages" cols="50" rows="10" placeholder='Message' className='cursor-none w-full rounded-lg'></textarea>
                  <motion.input
                    whileHover={{scale: 1.1}}
                    transition={{
                      duration: 1.5,
                      ease: [0, 0.71, 0.2, 1.01]
                    }}
                    type="submit" className='p-2 w-[8vw]  bg-yellow-500 md:w-full rounded-lg cursor-none'
                  />
                </form>

                </div>
                <div className="text-black nintendo hover:text-red-500 text-center w-3/4 h-[10vh]  relative">

                <motion.img
                animate={{ cursorPosition }}
                transition={{
                  duration:2,
                  delay:0.3,
                  ease: [0, 0.71, 0.2, 1.01]

                }}

                className='md:h-[20vh] md:w-[10vw] h-[25vh] grayscale rotate-[330deg] z-30 md:hidden' src={handpointer} alt="Cursor" style={{ position: 'absolute', left: centerPosition.x, top: centerPosition.y, pointerEvents: 'none' }} />

                <motion.div
                     whileHover={{scale:1.1}}
                     transition={{
                       duration:1.2,

                       ease: [0, 0.71, 0.2, 1.01]

                     }}
                className="md:text-[10px] ">
                  <span>andredandayaganon@gmail.com</span>
                </motion.div>
              </div>


              </motion.div>
              <div className="absolute right-[0.1vw] bottom-0 triangle-bottomleft3"></div>
          </motion.div>

        )}
      </AnimatePresence>


    </>
  )
}

export default Navbar;
