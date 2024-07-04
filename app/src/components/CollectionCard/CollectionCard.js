import Image from "next/image";
import arrow from "../../../../public/images/arrow.svg";

export function CollectionCard({ title, collectionImage }) {
  return (
    <div className='collectionCard'>
      <div className='collectionCard__text'>
        <div className='collectionCard__title'>
          <p className='collectionCard__top'>Коллекция</p>
          <h2 className='collectionCard__name'>{title}</h2>
        </div>
        <button className='collectionCard__button'>
          <Image src={arrow} alt="стрелка" />
        </button>
      </div>
      <Image
        src={collectionImage}
        alt="коллекция"
        className='collectionCard__image'
      />
    </div>
  );
}
export function CollectionBigCard({ title, collectionImage }) {
  return (
    <div className='collectionCard_size_big'>
      <div className='collectionCard__text'>
        <p className='collectionCard__top'>Коллекция</p>
        <h2 className='collectionCard__name'>{title}</h2>
      </div>
      <div className='collectionCard__image-wrapper'>
        <button className='collectionCard__button'>
          <Image src={arrow} alt="стрелка" />
        </button>
        <Image
          src={collectionImage}
          alt="коллекция"
          className='collectionCard__image'
        />

      </div>
    </div>
  );
}
