"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";

import Image from "next/image";
import newItemsData from "../../../mosk/newItemsData";
import Card from "../Card/Card";
import arrow from "../../../../public/images/arrow.svg";

import styles from "./styles.module.css";

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
      bulletActiveClass: styles.custom_swiper_pagination_bullet_active,
      bulletClass: styles.custom_swiper_pagination_bullet,
      clickable: true,
    }
  };

  return (
    <div className={styles.new__contaner}>
      <div className={styles.new__top}>
        <h2 className={styles.new__title}>Новинки</h2>
        <button className={styles.new__button}>
          <p className={styles.new__button_text}>ВСЕ НОВИНКИ</p>
          <Image src={arrow} alt="стрелка" />
        </button>
      </div>

      <div className={styles.slider_container}>
        <Swiper {...parametr} className={styles.swiper}>
          {newItemsData &&
            newItemsData.map((item) => (
              <SwiperSlide key={item.id}>
                <Card
                  photo={item.photo}
                  collection={item.collection}
                  title={item.title}
                  price={item.price}
                  exPrice={item.exPrice}
                />
                <div className="swiper-pagination"></div>
                <div class="swiper-button-next"></div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
