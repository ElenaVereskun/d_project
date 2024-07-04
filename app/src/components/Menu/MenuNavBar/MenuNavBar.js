import Image from "next/image";

import account from "../../../../../public/images/accoun-black.svg";
import search from "../../../../../public/images/search-black.svg";
import like from "../../../../../public/images/like-black.svg";
import bag from "../../../../../public/images/shopping-bag-black.svg";

export default function MenuNavBar() {
    return (
        <div className="menuNavBar">
            <button>
                <Image src={account} alt="Аккаунт" />
            </button>
            <button>
                <Image src={search} alt="Поиск" />
            </button>
            <button>
                <Image src={like} alt="Избранное" />
            </button>
            <button>
                <Image src={bag} alt="Корзина" />
            </button>
        </div>
    )
}