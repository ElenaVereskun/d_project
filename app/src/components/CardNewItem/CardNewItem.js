import Image from "next/image";
import like from "../../../../public/images/likeCard.svg";

export default function CardNewItem({ photo, collection, title, price, exPrice }) {
  return (
    <div className='cardNewItem'>
      <Image src={like} alt="Нравится" className='cardNewItem__like'/>
      <p className='cardNewItem__new'>NEW!</p>
      <Image
        src={photo}
        alt="фото"
        className='cardNewItem__image'
        width={330}
        height={330}
      />
      <p className='cardNewItem__collection'>{collection}</p>
      <p className='cardNewItem__title'>{title}</p>
      <div className='cardNewItem__prices'>
        <p className='cardNewItem__price'>{price} ₽</p>
        <p className='cardNewItem__exPrice'>{exPrice} ₽</p>
      </div>
    </div>
  );
}
