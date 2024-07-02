import Image from "next/image";

import CollectionCard from "../CollectionCard/CollectionCard";
import collectionsData from "../../../mosk/collectionsData";

import arrow from "../../../../public/images/arrow.svg";

import styles from "./styles.module.css";

export default function Collections() {
  return (
    <section>
      {/* <ul className={styles.collections}>
        <li className={styles.collection}>
          
        </li>
        <li className={styles.collection}>
          <div className={styles.collection__text}>
            <div className={styles.collection__title}>
              <p className={styles.collection__top}>Коллекция</p>
              <h2 className={styles.collection__name}>Человек — бензопила</h2>
            </div>
            <button className={styles.collection__button}>
              <Image src={arrow} alt="стрелка" />
            </button>
          </div>
          <Image
            src={collectionImage1}
            alt="коллекция"
            className={styles.collection__image}
          />
        </li>
        <li className={styles.collection}>
          <div className={styles.collection__text}>
            <div className={styles.collection__title}>
              <p className={styles.collection__top}>Коллекция</p>
              <h2 className={styles.collection__name}>Магическая битва</h2>
            </div>
            <button className={styles.collection__button}>
              <Image src={arrow} alt="стрелка" />
            </button>
          </div>
          <Image
            src={collectionImage2}
            alt="коллекция"
            className={styles.collection__image}
          />
        </li>
        <li className={styles.collection4}>
          <div className={styles.collection__text}>
            <div className={styles.collection__title}>
              <p className={styles.collection__top}>Коллекция</p>
              <h2 className={styles.collection__name}>Человек — бензопила</h2>
            </div>
            <button className={styles.collection__button}>
              <Image src={arrow} alt="стрелка" />
            </button>
          </div>
          <Image
            src={collectionImage3}
            alt="коллекция"
            className={styles.collection__image}
          />
        </li>
        <li className={styles.collection4}>
          <div className={styles.collection__text}>
            <div className={styles.collection__title}>
              <p className={styles.collection__top}>Коллекция</p>
              <h2 className={styles.collection__name}>Человек — бензопила</h2>
            </div>
            <button className={styles.collection__button}>
              <Image src={arrow} alt="стрелка" />
            </button>
          </div>
          <Image
            src={collectionImage3}
            alt="коллекция"
            className={styles.collection__image}
          />
        </li>
        <li className={styles.collection}>
          <div className={styles.collection__text}>
            <div className={styles.collection__title}>
              <p className={styles.collection__top}>Коллекция</p>
              <h2 className={styles.collection__name}>Магическая битва</h2>
            </div>
            <button className={styles.collection__button}>
              <Image src={arrow} alt="стрелка" />
            </button>
          </div>
          <Image
            src={collectionImage2}
            alt="коллекция"
            className={styles.collection__image}
          />
        </li>
        <li className={styles.collection}>
          <div className={styles.collection__text}>
            <div className={styles.collection__title}>
              <p className={styles.collection__top}>Коллекция</p>
              <h2 className={styles.collection__name}>Магическая битва</h2>
            </div>
            <button className={styles.collection__button}>
              <Image src={arrow} alt="стрелка" />
            </button>
          </div>
          <Image
            src={collectionImage2}
            alt="коллекция"
            className={styles.collection__image}
          />
        </li>
        <li className={styles.collection}>
          <div className={styles.collection__text}>
            <div className={styles.collection__title}>
              <p className={styles.collection__top}>Коллекция</p>
              <h2 className={styles.collection__name}>Магическая битва</h2>
            </div>
            <button className={styles.collection__button}>
              <Image src={arrow} alt="стрелка" />
            </button>
          </div>
          <Image
            src={collectionImage2}
            alt="коллекция"
            className={styles.collection__image}
          />
        </li>
        <li className={styles.collection}>
          <div className={styles.collection__text}>
            <div className={styles.collection__title}>
              <p className={styles.collection__top}>Коллекция</p>
              <h2 className={styles.collection__name}>Магическая битва</h2>
            </div>
            <button className={styles.collection__button}>
              <Image src={arrow} alt="стрелка" />
            </button>
          </div>
          <Image
            src={collectionImage2}
            alt="коллекция"
            className={styles.collection__image}
          />
        </li>
        <li className={styles.collection}>
          <div className={styles.collection__text}>
            <div className={styles.collection__title}>
              <p className={styles.collection__top}>Коллекция</p>
              <h2 className={styles.collection__name}>Магическая битва</h2>
            </div>
            <button className={styles.collection__button}>
              <Image src={arrow} alt="стрелка" />
            </button>
          </div>
          <Image
            src={collectionImage2}
            alt="коллекция"
            className={styles.collection__image}
          />
        </li>
      </ul> */}
      <ul className={styles.collections}>
        {collectionsData.slice(0, 3).map((item) => (
          <li className={styles.collection} id={item.id}>
            <CollectionCard
              title={item.collection}
              collectionImage={item.photo}
            />
          </li>
        ))}
        {collectionsData.slice(4, 6).map((item) => (
          <li className={styles.collection_size_big} id={item.id}>
            <CollectionCard
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
        {collectionsData.slice(5, 7).map((item) => (
          <li className={styles.collection} id={item.id}>
            <CollectionCard
              title={item.collection}
              collectionImage={item.photo}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
