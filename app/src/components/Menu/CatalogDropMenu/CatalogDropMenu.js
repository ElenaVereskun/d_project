import styles from "./styles.module.css";

export default function CatalogDropMenu() {
    return (
        <ol className={styles.drop__items}>
            <li className={styles.drop__item}>
                Магическая битва
            </li>
            <li className={styles.drop__item}>
                Клинок, рассекающий демонов
            </li>
            <li className={styles.drop__item}>
                Берсерк
            </li>
            <li className={styles.drop__item}>
                Баскетбол Куроко
            </li>
            <li className={styles.drop__item}>
                Человек-бензопила
            </li>
            <li className={styles.drop__item}>
                Моя геройская академия
            </li>
            <li className={styles.drop__item}>
                Евангелион
            </li>
            <li className={styles.drop__item}>
                Блич
            </li>
        </ol>
    )
}