"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Pagination } from "swiper/modules";

import photo from "../../../../public/images/imageMain.png";
import photo1 from "../../../../public/images/imageMain.png";
import photo2 from "../../../../public/images/imageMain.png";

import styles from "./styles.module.css";

export default function Slider() {
  const parametr = {
    slidesPerView: 1,
    slidesPerGroup: 1,
    createElements: true,
    followFinger: true,
    speed: 1000,
    loop: false,
    modules: [Pagination],
    pagination: {
      bulletActiveClass: styles.custom_swiper_pagination_bullet_active,
      bulletClass: styles.custom_swiper_pagination_bullet,
      clickable: true,
    },
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
    <div className={styles.slider_container}>
      <Swiper {...parametr} className={styles.swiper}>
        {simpleData &&
          simpleData.map((item) => (
            <SwiperSlide key={item.id}>
              <Image src={item.photo} alt="фото" className={styles.image} />
              <div className="swiper-pagination"></div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
