/* "use client";
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
    },
  };

  return (
    <div className='new__contaner'>
      <div className='new__top'>
        <h2 className='new__title'>Новинки</h2>
        <button className='new__button new__button_type_desktop'>
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
      <button className='new__button new__button_type_mobile'>
        <p className='new__button_text'>ВСЕ НОВИНКИ</p>
        <Image src={arrow} alt="стрелка" />
      </button>
    </div>
  );
}
 */
/* import Image from "next/image";
import CardNewItem from "../CardNewItem/CardNewItem";
import newItemsData from "../../../mosk/newItemsData";
import arrow from "../../../../public/images/arrow.svg";

export default function NewItems() {

  return (
    <div className='new__contaner'>
      <div className='new__top'>
        <h2 className='new__title'>Новинки</h2>
        <button className='new__button new__button_type_desktop'>
          <p className='new__button_text'>ВСЕ НОВИНКИ</p>
          <Image src={arrow} alt="стрелка" />
        </button>
      </div>
      <div className="itc-slider">
        <div className="itc-slider-wrapper">
          <div className="itc-slider-items">
            {newItemsData.map((item) => (
              <div className="itc-slider-item">
                <CardNewItem
                  photo={item.photo}
                  collection={item.collection}
                  title={item.title}
                  price={item.price}
                  exPrice={item.exPrice}
                />
              </div>
            ))}
            <div className="itc-slider-item">ckfql </div>
          </div>
        </div>
        <button className="itc-slider-btn itc-slider-btn-prev"></button>
        <button className="itc-slider-btn itc-slider-btn-next"></button>
        <ol className="itc-slider-indicators">
          <li className="itc-slider-indicator" data-slide-to="0"></li>
          <li className="itc-slider-indicator" data-slide-to="1"></li>
          <li className="itc-slider-indicator" data-slide-to="2"></li>
        </ol>
      </div>
    </div>
  )
}
 */

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
             {/*  <div className="swiper-pagination"></div> */}
              {/* 
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev swiper__button_prev"></div> */}
            </SwiperSlide>
          ))}
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
