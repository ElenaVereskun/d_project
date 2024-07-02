"use client";
import Image from "next/image";
import { useState } from "react";
import Popup from "../Popup/Popup";

import logo from "../../../../public/images/logo.svg";
import phone from "../../../../public/images/phoneIcon.svg";
import account from "../../../../public/images/accountIcon.svg";
import search from "../../../../public/images/search.svg";
import like from "../../../../public/images/like.svg";
import bag from "../../../../public/images/shopping-bag.png";

import styles from "./styles.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const closeDrop = () => {
    setIsOpen(false);
  };
  return (
    <section className={styles.header}>
      <div className={styles.header__items}>
        <Image src={logo} alt="лого" className={styles.header__logo} />
        <ul className={styles.header__catalog}>
          <li>Аниме</li>
          <li>Футболки</li>
          <li>Лонгсливы</li>
          <li>худи</li>
          <li>Инфо</li>
          <li>Новости</li>
          <li>Контакты</li>
        </ul>
        <div className={styles.header__phone} onClick={toggleOpen}>
          <Image src={phone} alt="телефон" width={16} height={16} />
          <p className={styles.header__number}>+7 900 000-00-00</p>
        </div>
        <div className={styles.header__account}>
          <Image src={account} alt="аккаунт" width={16} height={16} />
          <p className={styles.header__email}>Alexsandеr@gmail.com</p>
          <p className={styles.header__score}>10 000 бал.</p>
        </div>
        <div className={styles.header__icons}>
          <button>
            <Image src={search} alt="Поиск" />
          </button>
          <button className={styles.header__icon}>
            <Image src={like} alt="Избранное" />
            <div className={styles.header__counter}>10</div>
          </button>
          <button className={styles.header__icon}>
            <Image src={bag} alt="Корзина" />
            <div className={styles.header__counter}>10</div>
          </button>
        </div>
      </div>
      {/*  <Popup isOpen={isOpen} /> */}
    </section>
  );
}
