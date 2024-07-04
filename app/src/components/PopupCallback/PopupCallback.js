import Image from "next/image";

import cross from "../../../../public/images/cross.svg"

export default function PopupCallback({ isOpen, onClickCloseButton }) {
  return (
    <div className={isOpen ? 'popup' : 'popup_block'}>
      <div className='popup__container'>
        <button className='popup__button_close' onClick={onClickCloseButton}>
          <Image src={cross} alt="закрыть" />
        </button>
        <form className='popup__form'>
          <h2 className='popup__title'>Обратный звонок</h2>
          <input placeholder="Имя" className='popup__input' />
          <input placeholder="Номер телефона" className='popup__input' />
          <div className='popup__button_wrapper'>
            <button className='popup__button_send'>ОТПРАВИТЬ</button>
            <p className='popup__send_text'>Нажимая кнопку, вы соглашаетесь с обработкой ваших персональных данных</p>
          </div>
        </form>
      </div>
    </div>
  );
}
