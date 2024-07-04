"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Pagination } from "swiper/modules";

import photo from "../../../../public/images/imageMain.png";
import photo1 from "../../../../public/images/imageMain.png";
import photo2 from "../../../../public/images/imageMain.png";

export default function SliderMain() {
  const parametr = {
    slidesPerView: 1,
    slidesPerGroup: 1,
    createElements: true,
    followFinger: true,
    speed: 1000,
    loop: false,
    modules: [Pagination],
    pagination: {
      bulletActiveClass: '.custom_swiper_pagination_bullet_active',
      bulletClass:'.custom_swiper_pagination_bullet',
      clickable: true,
    }
  };

  const simpleData = [
    {
      id: 1,
      photo: photo,
    },
    {
      id: 2,
      photo: photo1,
    },
    {
      id: 3,
      photo: photo2,
    },
  ];
  return (
    <div className='slider_container'>
      <Swiper {...parametr} className='swiper'>
        {simpleData &&
          simpleData.map((item) => (
            <SwiperSlide key={item.id}>
              <Image src={item.photo} alt="фото" className='image' />
              <div className="swiper-pagination"></div>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev  swiper__button_prev"></div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}