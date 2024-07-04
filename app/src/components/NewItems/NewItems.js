"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";

import Image from "next/image";
import newItemsData from "../../../mosk/newItemsData";
import arrow from "../../../../public/images/arrow.svg";
import CardNewItem from "../CardNewItem/CardNewItem";

export default function NewItems() {
  const parametr = {
    slidesPerView: 4,
    slidesPerGroup: 4,
    createElements: true,
    followFinger: true,
    speed: 1000,
    loop: false,
    modules: [Pagination],
    pagination: {
      bulletActiveClass: '.custom_swiper_pagination_bullet_active',
      bulletClass: '.custom_swiper_pagination_bullet',
      clickable: true,
    }
  };

  return (
    <div className='new__contaner'>
      <div className='new__top'>
        <h2 className='new__title'>Новинки</h2>
        <button className='new__button'>
          <p className='new__button_text'>ВСЕ НОВИНКИ</p>
          <Image src={arrow} alt="стрелка" />
        </button>
      </div>

      <div className='slider_container'>
        <Swiper {...parametr} className='swiper'>
          {newItemsData &&
            newItemsData.map((item) => (
              <div className='swiper-wrapper'>
                <SwiperSlide key={item.id}>
                  <CardNewItem
                    photo={item.photo}
                    collection={item.collection}
                    title={item.title}
                    price={item.price}
                    exPrice={item.exPrice}
                  />
                  <div className="swiper-pagination"></div>
                  <div className="swiper-button-next custom-swiper__button-next"></div>
                  <div className="swiper-button-prev custom-swiper__button-prev"></div>
                </SwiperSlide>
              </div>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
