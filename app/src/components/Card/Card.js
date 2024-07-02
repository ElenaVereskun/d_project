import Image from "next/image";
import like from "../../../../public/images/likeCard.svg";

import styles from "./styles.module.css";

export default function Card({ photo, collection, title, price, exPrice }) {
  return (
    <div className={styles.card}>
      <Image src={like} alt="Нравится" className={styles.card__like} />
      <p className={styles.card__new}>NEW!</p>
      <Image
        src={photo}
        alt="фото"
        className={styles.card__image}
        width={330}
        height={330}
      />
      <p className={styles.card__collection}>{collection}</p>
      <p className={styles.card__title}>{title}</p>
      <div className={styles.card__prices}>
        <p className={styles.card__price}>{price} ₽</p>
        <p className={styles.card__exPrice}>{exPrice} ₽</p>
      </div>
    </div>
  );
}
