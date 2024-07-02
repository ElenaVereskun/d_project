import styles from "./styles.module.css";

export default function Popup({ isOpen }) {
  return (
    <div className={isOpen ? styles.popup : styles.popup_block}>
      <p>Popup</p>
    </div>
  );
}
