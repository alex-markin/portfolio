import styles from './burgerButton.module.css';
import { useSelector } from '../../services/hooks/redux-hooks';
import { getMenuState } from '../../services/store/storeSelectors';

type BurgerButtonProps = {
  onButtonClick: () => void;
}

function BurgerButton({ onButtonClick }: BurgerButtonProps) {

  const menuOpen = useSelector(getMenuState).menuOpen;

  const menuOpenClass = !menuOpen ? styles.menuBtnElem : `${styles.menuBtnElem} ${styles.menyBtnElemActive}`;

  return (
    <div className={styles.menuBtn} onClick={onButtonClick}>
      <span className={menuOpenClass}></span>
      <span className={menuOpenClass}></span>
      <span className={menuOpenClass}></span>
    </div>
  )
}

export default BurgerButton;