import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper'
// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination'


interface BannerSwiperInterface {
    banner_items: any,
}
export const BannerSwiper = (props:BannerSwiperInterface) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={3}
        className="mySwiper"
      >
        {
          [1,2,3,4].map((work:any, index:number) => {
              return(
                  <SwiperSlide key={index}>
                    <div style={{
                      backgroundColor: 'grey',
                    }}>
                    <img src="https://image.webtoonguide.com/cocoda/COCODA_128x128.png"/>
                    </div>
                  </SwiperSlide>
              )
          })
        }
      </Swiper>
    </>
  );
}
