"use client";
import Image from "next/image";
import { useState } from "react";
import PopupCallback from "../PopupCallback/PopupCallback";
import CatalogDropMenu from "../Menu/CatalogDropMenu/CatalogDropMenu";

import logo from "../../../../public/images/logo.svg";
import phone from "../../../../public/images/phoneIcon.svg";
import account from "../../../../public/images/accountIcon.svg";
import search from "../../../../public/images/search.svg";
import like from "../../../../public/images/like.svg";
import bag from "../../../../public/images/shopping-bag.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDrop, setIsOpenDrop] = useState(false);

  const toggleDrop = () => {
    setIsOpenDrop(!isOpenDrop);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const closePopup = () => {
    setIsOpen(false);
  }
  return (
    <section className='header'>
      <div className='header__items'>
        <Image src={logo} alt="лого" className='header__logo' />
        <ul className='header__catalog'>
          <li>
            <button onClick={toggleDrop}>
              АНИМЕ
              {isOpenDrop && (
                <div className='header__drop_arrow'>
                  <div className='header__drop'>
                    <CatalogDropMenu />
                    <CatalogDropMenu />
                    <CatalogDropMenu />
                  </div>
                </div>
              )}
            </button>
          </li>
          <li>Футболки</li>
          <li>Лонгсливы</li>
          <li>худи</li>
          <li>Инфо</li>
          <li>Новости</li>
          <li>Контакты</li>
        </ul>
        <button className='header__phone' onClick={toggleOpen}>
          <Image src={phone} alt="телефон" width={16} height={16} />
          <p className='header__number'>+7 900 000-00-00</p>
        </button>
        <div className='header__account'>
          <Image src={account} alt="аккаунт" width={16} height={16} />
          <p className='header__email'>Alexsandеr@gmail.com</p>
          <p className='header__score'>10 000 бал.</p>
        </div>
        <div className='header__icons'>
          <button>
            <Image src={search} alt="Поиск" />
          </button>
          <button className='header__icon'>
            <Image src={like} alt="Избранное" />
            <div className='header__counter'>10</div>
          </button>
          <button className='header__icon'>
            <Image src={bag} alt="Корзина" />
            <div className='header__counter'>10</div>
          </button>
        </div>
      </div>
      <PopupCallback isOpen={isOpen} onClickCloseButton={closePopup} />
    </section>
  );
}
