"use client";
import Image from "next/image";
import { useState } from "react";
import arrowUp from '../../../../../public/images/chevron-up.svg';
import arrowDown from '../../../../../public/images/chevron-down.svg';
import cross from "../../../../../public/images/cross.svg"

import CatalogDropMenu from "../CatalogDropMenu/CatalogDropMenu";

export default function MenuBurgerPopup({ onClickCloseButton }) {

    const [isOpenDrop, setIsOpenDrop] = useState(true);
    const toggleDrop = () => {
        setIsOpenDrop(!isOpenDrop);
    };

    return (
        <div className="menu">
            <button className='menu__button_close' onClick={onClickCloseButton}>
                <Image src={cross} alt="закрыть" />
            </button>
            <ul className='menu__items'>
                <li className='menu__item' >
                    <div className='menu__item-wrapper'>
                        <button onClick={toggleDrop}>АНИМЕ</button>
                        {isOpenDrop ? (
                            <Image src={arrowUp} alt="стрелка" />
                        ) : (
                            <Image src={arrowDown} alt="стрелка" />
                        )}
                    </div>
                    {isOpenDrop && (
                        <div className='menu__drop'>
                            <CatalogDropMenu />
                            <CatalogDropMenu />
                            <CatalogDropMenu />
                        </div>
                    )}
                </li>
                <li className='menu__item'>Футболки</li>
                <li className='menu__item'>Лонгсливы</li>
                <li className='menu__item'>худи</li>
                <li className='menu__item'>
                    <div className='menu__item-wrapper'>
                        <button>ИНФО</button>
                        <Image src={arrowDown} alt="Стрелка" />
                    </div>

                </li>
                <li className='menu__item'>
                    <div className='menu__item-wrapper'>
                        <button>НОВОСТИ</button>
                        <Image src={arrowDown} alt="Стрелка" />
                    </div>
                </li>
                <li className='menu__item'>Контакты</li>
            </ul>
        </div>
    )
}