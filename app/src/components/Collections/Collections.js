import Image from "next/image";
import collectionImage from "../../../../public/images/collectionImage.png";
import collectionImage1 from "../../../../public/images/collectionImage1.png";
import collectionImage2 from "../../../../public/images/collectionImage2.png";
import collectionImage3 from "../../../../public/images/collectionImage3.png";

import arrow from "../../../../public/images/arrow.svg";

import styles from "./styles.module.css";

export default function Collections() {
  return (
    <section>
      <ul className={styles.collections}>
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
            src={collectionImage}
            alt="коллекция"
            className={styles.collection__image}
          />
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
      </ul>
    </section>
  );
}
