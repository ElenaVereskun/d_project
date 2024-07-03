import Image from "next/image";

import { CollectionCard, CollectionBigCard } from "../CollectionCard/CollectionCard";
import collectionsData from "../../../mosk/collectionsData";

import arrow from "../../../../public/images/arrow.svg";

import styles from "./styles.module.css";

export default function Collections() {
  return (
    <section>
      <ul className={styles.collections}>
        {collectionsData.slice(0, 3).map((item) => (
          <CollectionCard
            title={item.collection}
            collectionImage={item.photo}
          />
        ))}
        {collectionsData.slice(3, 5).map((item) => (
          <li className={styles.collection_size_big} id={item.id}>
            <CollectionBigCard
              title={item.collection}
              collectionImage={item.photo}
            />
          </li>
        ))}
        <li className={styles.collection__top}>
          <div className={styles.collection__wrapper}>
            <h2 className={styles.collection__title}>Популярные коллекции</h2>
            <button className={styles.collection__button}>
              <p className={styles.collection__button_text}>ВСЕ КОЛЛЕКЦИИ</p>
              <Image src={arrow} alt="стрелка" />
            </button>
          </div>
        </li>
        {collectionsData.slice(5, 8).map((item) => (
          <CollectionCard
            title={item.collection}
            collectionImage={item.photo}
          />
        ))}
      </ul>
    </section>
  );
}
