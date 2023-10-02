import React from 'react'
import { Modals,Navbar } from '@/Components'
import { Responsive,Ranking,Analysis,Api } from '@/assets';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const navStyles = {
  color: 'black',
};

import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

const Solve = () => {

  return (
    <div className='w-full h-screen flex flex-col '>
      <div className="h-[10%] ">
          <Navbar/>
      </div>
      <div className="w-full h-[20%] font-bold flex items-center justify-center md:text-sm">
            <h1>Let's Solve Problems</h1>
          </div>
      <div className="w-full h-[70%] font-bold   flex items-center justify-center md:text-sm ">
        <div className="w-3/4 h-[60%] 0 swiper-blur-container">
      <Swiper
      effect={'coverflow'}
        slidesPerView={2}
        spaceBetween={2}
        centeredSlides={true}
        grabCursor={true}
        loop={true}
        pagination={{
          el:'swiper-pagination',
          clickable:true,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 50,
          modifier: 10,
          slideShadows: false,
        }}
        freeMode={true}


        modules={[Pagination,Navigation, EffectCoverflow]}
        className="mySwiper   h-[400px] w-3/4 "
      >


        <SwiperSlide >
          <div className=" flex items-center justify-center  " data-swiper-parallax="50%" data-swiper-parallax-scale="1.2">
            <Modals
            titles={"RESPONSIVE"}
            paragraph={"Your website will be responsive to all different screen sizes"}
            images={Responsive}


            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className=" flex items-center justify-center p-0 ">
            <Modals
            titles={"API INTEGRATION"}
            paragraph={"I can integrate api payment services, social media, email marketing, messaging api and any api web services"}
            images={Api}


            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" flex items-center justify-center p-0 ">
            <Modals
            titles={"WEB ANALYSIS"}
            paragraph={"Supercharge your website now! Get expert analysis for peak performance. Uncover hidden opportunities. Elevate your online presence"}
            images={Analysis}


            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="  flex items-center justify-center p-0 ">
          <Modals
          titles={"WEB RANKING"}
          paragraph={"I'll propel your website up the search engine ladder, ensuring it gleams among the first search results"}
          images={Ranking}
          className={"scale-125 "}
          />
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className=" flex items-center justify-center  " data-swiper-parallax="50%" data-swiper-parallax-scale="1.2">
            <Modals
            titles={"RESPONSIVE"}
            paragraph={"Your website will be responsive to all different screen sizes"}
            images={Responsive}


            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className=" flex items-center justify-center p-0 ">
            <Modals
            titles={"API INTEGRATION"}
            paragraph={"I can integrate api payment services, social media, email marketing, messaging api and any api web services"}
            images={Api}


            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" flex items-center justify-center p-0 ">
            <Modals
            titles={"WEB ANALYSIS"}
            paragraph={"Supercharge your website now! Get expert analysis for peak performance. Uncover hidden opportunities. Elevate your online presence"}
            images={Analysis}


            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="  flex items-center justify-center p-0 ">
          <Modals
          titles={"WEB RANKING"}
          paragraph={"I'll propel your website up the search engine ladder, ensuring it gleams among the first search results"}
          images={Ranking}
          className={"scale-125 "}
          />
          </div>
        </SwiperSlide>



      </Swiper>
      </div>
          </div>
    </div>
  )
}

export default Solve
