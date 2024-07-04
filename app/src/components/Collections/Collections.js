import Image from "next/image";

import { CollectionCard, CollectionBigCard } from "../CollectionCard/CollectionCard";
import collectionsData from "../../../mosk/collectionsData";

import arrow from "../../../../public/images/arrow.svg";

export default function Collections() {
  return (
    <section>
      <ul className='collections collections_type_desktop'>
        {collectionsData.slice(0, 3).map((item) => (
          <CollectionCard
            title={item.collection}
            collectionImage={item.photo}
          />
        ))}
        {collectionsData.slice(3, 5).map((item) => (
          <li className='collection_size_big' id={item.id}>
            <CollectionBigCard
              title={item.collection}
              collectionImage={item.photo}
            />
          </li>
        ))}
        <li className='collection__top'>
          <div className='collection__wrapper'>
            <h2 className='collection__title'>Популярные коллекции</h2>
            <button className='collection__button'>
              <p className='collection__button_text'>ВСЕ КОЛЛЕКЦИИ</p>
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
      <ul className='collections__mobile'>
        <li>
          <h2 className='collection__title'>Популярные коллекции</h2>
        </li>
        {collectionsData.map((item) => (
          <CollectionCard
            title={item.collection}
            collectionImage={item.photo}
          />
        ))}
        <li className="collection__button-wrapper">
          <button className='collection__button'>
            <p className='collection__button_text'>ВСЕ КОЛЛЕКЦИИ</p>
            <Image src={arrow} alt="стрелка" />
          </button>
        </li>
      </ul>
    </section>
  );
}
