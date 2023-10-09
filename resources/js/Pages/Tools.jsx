import React from 'react';
import { Navbar, Sets, Setdown,Side,Right,SetUp } from '@/Components';
import { HTML, reacts, CSS, JS, NODE,Tailwind,Figma,Mysql } from '@/assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




import { Navigation, Pagination } from 'swiper/modules';


const navStyles = {
  color: 'black',
};
const Tools = () => {


  return (
    <div className="w-full h-screen flex flex-col ">
      <div className="w-full z-10">
        <Navbar />
      </div>
      <div className="h-[100%] w-full  ">




            <motion.div
              initial={{opacity:0,y:30}}
              whileInView={{opacity:1,y:0}}

              transition={{
                duration:2,
                delay:0.3,
                ease: [0, 0.71, 0.2, 1.01]

              }}


            className="w-full flex flex-col justify-center items-center h-[30%]">
              <h1 className="font-bold">SKILLS</h1>
              <h3 className="font-bold">&lt;/&gt;</h3>

            </motion.div>

            <div className="w-full h-[70%] space-y-5    flex flex-col justify-start items-center lg:hidden">
            <motion.div
               initial={{opacity:0,y:30}}
               whileInView={{opacity:1,y:0}}

               transition={{
                 duration:2,
                 delay:0.3,
                 ease: [0, 0.71, 0.2, 1.01]

               }}

            className="text-center w-1/2 p-2 ">
              <span>Using these tools, I create websites that blend form with function. Your online presence will not only look amazing but perform seamlessly. Elevate your brand's digital experience with me!</span>
              </motion.div>
              <div className="w-full space-x-10 flex  justify-center">

                <Sets
                label={"HTML"}
                images={HTML}
                className={"w-[45%]"}
                />
                <Sets
                  label={"CSS"}
                  images={CSS}
                  className={"w-[60%] top-[10%]"}
                />
                <Sets
                  label={"Javascript"}
                  images={JS}
                  className={"w-[40%]"}
                />
                <Sets
                label={"React"}
                images={reacts}
                className={"w-[50%]"}
                />
                <Sets
                  label={"Node Js"}
                  images={NODE}
                  className={"w-[60%] left-[20%] top-[25%]"}
                />
                <Sets
                label={"MySql"}
                images={Mysql}
                className={"w-[50%] top-[15%]"}
                />
                </div>
                <div className="w-full flex space-x-10 justify-center">
                <Side label={"Tailwind"}
                images={Tailwind}
                className={"scale-50 top-[-10%]"}
                />
                <Right label={"Figma"}
                images={Figma}
                className={"scale-50 top-[5%] w-[50%] "}
                />
                </div>

            </div>
            <div className="text-center w-full p-2 absolute hidden lg:flex">
              <span>Using these tools, I create websites that blend form with function. Your online presence will not only look amazing but perform seamlessly. Elevate your brand's digital experience with me!</span>
              </div>
            <div className="relative h-[60%]   w-full  hidden lg:flex lg:items-center shadow-custom mb-12">

            <Swiper
            slidesPerView={1}

              loop={true}

              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              breakpoints={{
                452:{
                  slidesPerView:2,
                  spaceBetween:5,
                },
                640:{
                  slidesPerView:3,
                  spaceBetween:20,
                },
                768:{
                  slidesPerView:4,
                  spaceBetween:40,
                },

              }}

              modules={[Pagination,Navigation]}
              className=" mySwiper h-[50%] "
            >
              <SwiperSlide  >
                <div className="border rounded-2xl h-full ">
                <Setdown

                label={"HTML"}
                images={HTML}
                className={"scale-[0.14] object-contain"}
                /></div>

              </SwiperSlide>
              <SwiperSlide>
              <div className="border  rounded-2xl h-full ">
                <SetUp
                label={"CSS"}
                images={CSS}
                className={"scale-[0.18] object-contain"}
              /></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="border rounded-2xl h-full">
              <Setdown
                label={"JAVASCRIPT"}
                images={JS}
                className={"scale-[0.11] object-contain"}

                /></div>
              </SwiperSlide>
              <SwiperSlide >
                <div className="border rounded-2xl h-full">
                <SetUp
                label={"REACT"}
                images={reacts}
                className={"scale-[0.14] object-contain"}
                /></div>
              </SwiperSlide>
              <SwiperSlide >
                <div className="border rounded-2xl h-full">
                <Setdown
                label={"NODE JS"}
                images={NODE}
                className={"scale-[0.14] object-contain"}
                /></div>
              </SwiperSlide>
              <SwiperSlide >
                <div className="border rounded-2xl h-full">
                <SetUp
                label={"MYSQL"}
                images={Mysql}
                className={"scale-[0.18]"}
                /></div>
              </SwiperSlide>
              <SwiperSlide >
                <div className="border rounded-2xl">
              <Setdown
                label={"TAILWIND"}
                images={Tailwind}
                className={"scale-[0.14] object-contain"}
                /></div>
              </SwiperSlide>
              <SwiperSlide >
                <div className="border rounded-2xl h-full">
              <SetUp
                label={"FIGMA"}
                images={Figma}
                className={"scale-[0.1] object-contain"}
                /></div>
              </SwiperSlide>

              <div className="swiper-button-next " style={navStyles}></div>
              <div className="swiper-button-prev  "style={navStyles}></div>
            </Swiper>


              </div>
      </div>
      </div>

  );
};

export default Tools;
