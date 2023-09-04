import styles from './burgerButton.module.css';
import { useState } from 'react';

type BurgerButtonProps = {
  onButtonClick: () => void;
}

function BurgerButton({ onButtonClick }: BurgerButtonProps) {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
    onButtonClick();
  }

  const menuOpenClass = !menuOpen ? styles.menuBtnElem : `${styles.menuBtnElem} ${styles.menyBtnElemActive}`;

  return (
    <div className={styles.menuBtn} onClick={handleClick}>
      <span className={menuOpenClass}></span>
      <span className={menuOpenClass}></span>
      <span className={menuOpenClass}></span>
    </div>
  )
}

export default BurgerButton;