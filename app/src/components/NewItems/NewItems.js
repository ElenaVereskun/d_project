"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import CardNewItem from "../CardNewItem/CardNewItem";
import newItemsData from "../../../mosk/newItemsData";
import arrow from "../../../../public/images/arrow.svg";

export function Slider() {
  const parametr = {
    slidesPerView: 4,
    slidesPerGroup: 4,
    createElements: true,
    followFinger: true,
    speed: 1000,
    loop: false,
    modules: [Pagination],
    pagination: {
      bulletActiveClass: 'custom_swiper_pagination_bullet_active',
      bulletClass: 'custom_swiper_pagination_bullet',
      clickable: true,
    },
    breakpoints: {
      360: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20
      },
      744: {
        spaceBetween: 20,
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 20
      },
      1440: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 20
      }
    }
  };

  return (

    <div className='slider_container'>
      <Swiper {...parametr} className='swiper'>
        {newItemsData &&
          newItemsData.map((item) => (
            <SwiperSlide key={item.id}>
              <CardNewItem
                photo={item.photo}
                collection={item.collection}
                title={item.title}
                price={item.price}
                exPrice={item.exPrice}
              />
            </SwiperSlide>
          ))}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </div>
  );
}

export function NewItemsTitle() {
  return (
    <div className='new__contaner'>
      <div className='new__top'>
        <h2 className='new__title'>Новинки</h2>
        <button className='new__button new__button_type_desktop'>
          <p className='new__button_text'>ВСЕ НОВИНКИ</p>
          <Image src={arrow} alt="стрелка" />
        </button>
      </div>
      <button className='new__button new__button_type_mobile'>
        <p className='new__button_text'>ВСЕ НОВИНКИ</p>
        <Image src={arrow} alt="стрелка" />
      </button>
    </div>
  )
}
