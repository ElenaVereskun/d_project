import Image from "next/image";
import arrow from "../../../../public/images/arrow.svg";
import styles from "./styles.module.css";

export function CollectionCard({ title, collectionImage }) {
  return (
    <div className={styles.collectionCard}>
      <div className={styles.collection__text}>
        <div className={styles.collection__title}>
          <p className={styles.collection__top}>Коллекция</p>
          <h2 className={styles.collection__name}>{title}</h2>
        </div>
        <button className={styles.collection__button}>
          <Image src={arrow} alt="стрелка" />
        </button>
      </div>
      <Image
        src={collectionImage}
        alt="коллекция"
        className={styles.collection__image}
      />
    </div>
  );
}
export function CollectionBigCard({ title, collectionImage }) {
  return (
    <div className={styles.collectionCard_size_big}>
      <div className={styles.collection__text}>
        <div className={styles.collection__title}>
          <p className={styles.collection__top}>Коллекция</p>
          <h2 className={styles.collection__name}>{title}</h2>
        </div>
        <button className={styles.collection__button}>
          <Image src={arrow} alt="стрелка" />
        </button>
      </div>
      <Image
        src={collectionImage}
        alt="коллекция"
        className={styles.collection__image}
      />
    </div>
  );
}
