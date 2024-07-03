import Image from "next/image";

import styles from "./styles.module.css";
import cross from "../../../../public/images/cross.svg"

export default function PopupCallback({ isOpen, onClickCloseButton }) {
  return (
    <div className={isOpen ? styles.popup : styles.popup_block}>
      <div className={styles.popup__container}>
        <button className={styles.popup__button_close} onClick={onClickCloseButton}>
          <Image src={cross} alt="закрыть" />
        </button>
        <form className={styles.popup__form}>
          <h2 className={styles.popup__title}>Обратный звонок</h2>
          <input placeholder="Имя" className={styles.popup__input} />
          <input placeholder="Номер телефона" className={styles.popup__input} />
          <div className={styles.popup__button_wrapper}>
            <button className={styles.popup__button_send}>ОТПРАВИТЬ</button>
            <p className={styles.popup__send_text}>Нажимая кнопку, вы соглашаетесь с обработкой ваших персональных данных</p>
          </div>
        </form>
      </div>
    </div>
  );
}
