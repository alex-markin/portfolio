
// styles 
import styles from './navbar.module.css'

// libraries
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// components
import BurgerButton from '../burgerButton/burgerButton';



function Navbar() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateScreenWidth);

    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);

  const onBurgerButtonClick = () => {
    setMenuOpen(!menuOpen);

  }

  const navbarListStyle = screenWidth <= 768 ? `${styles.navbarList} ${styles.navbarListMobile}` : styles.navbarList;


  return (
    <>
      <nav className={styles.navbar}>
        <ul className={menuOpen || screenWidth > 768 ? navbarListStyle : styles.navbarListHidden} >
          <Link to="#" className={styles.navbarLink}>About</Link>
          <Link to="#" className={styles.navbarLink}>Work</Link>
          <Link to="#" className={styles.navbarLink}>Contact</Link>
        </ul>
      </nav>
      {screenWidth <= 768 ? <BurgerButton onButtonClick={onBurgerButtonClick} /> : null}
    </>
  )
}


export default Navbar;