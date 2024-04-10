import React from 'react'
import { Navbar } from '@/Components'
import { yehey } from '@/assets'
const Contact = () => {
  return (
    <div className='flex flex-col h-screen'>
        <div className="w-full"><Navbar/></div>
        <div className="w-full h-[20%]  flex items-center  justify-center">
            <h1 className='font-extrabold  md:text-6xl'>Let’s Collaborate!</h1>
        </div>
        <div className="w-full h-[80%] flex text-white  items-center justify-center">
            <div className="w-[50%] h-full flex md:hidden justify-end items-center  ">
                <img className='xl:scale-95 scale-125  ' src={yehey} alt="" />
            </div>
                <div className="w-[50%] md:w-[80%] h-full  flex items-center justify-start md:justify-center ">
                    <div className="border-black bg-black border-2 p-6 flex justify-center rounded-3xl md:w-[100%] lg:w-[70%] xl:w-[75%] w-[60%] h-[85%]">
                    <form className='flex flex-col space-y-4 w-full '>
                        <div className="w-full flex flex-col justify-start">
                            <h4 className='font-bold'>Get in <span className='text-yellow-500'>touch</span></h4>
                            <h2 className='font-bold'>Contact Me</h2>
                        </div>
                        <div className="flex md:w-full space-x-2  items-center  lg:w-[50%] ">
                            <div className="w-full flex flex-col space-y-2 ">
                                <label htmlFor="fname">First Name</label>
                                <input id='fname' className='rounded-lg ' type="text" />
                            </div>
                            <div className="w-full flex flex-col space-y-2 ">
                                <label htmlFor="fname">Last Name</label>
                                <input id='fname' className='rounded-lg ' type="text" />
                            </div>

                        </div>

                        <div className="flex w-full  space-x-2 ">
                        <div className="w-full flex flex-col space-y-2">
                                <label htmlFor="fname">Email</label>
                                <input id='fname' className='rounded-lg ' type="text" />
                            </div>


                        </div>
                        <div className="flex w-full h-[100%] space-x-2 ">
                            <div className="w-full flex flex-col space-y-2">
                                    <label htmlFor="message">Message</label>

                                    <textarea id="message" className='border-black rounded-lg  text-black  h-full   ' name="message" ></textarea>
                            </div>


                        </div>
                        <div className="flex w-full ">
                            <div className="w-full flex justify-center  ">
                                    <button className='rounded-2xl p-3 w-[30%] text-black font-extrabold bg-yellow-500' type='submit'>Submit</button>

                            </div>

                         </div>
                    </form>
                    </div>
                </div>
        </div>

    </div>
  )
}

export default Contact
