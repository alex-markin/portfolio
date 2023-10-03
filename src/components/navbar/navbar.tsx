
// styles 
import styles from './navbar.module.css'

// libraries
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// store && selectors
import { useDispatch, useSelector } from '../../services/hooks/redux-hooks';
import { getMenuState } from '../../services/store/storeSelectors';
import { burgerMenuSlice } from '../../services/store/slices/burgerMenuSlice';

// components
import BurgerButton from '../burgerButton/burgerButton';


function Navbar() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const dispatch = useDispatch();
  const menuOpen = useSelector(getMenuState).menuOpen;

  // check the screen width on resize
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
    dispatch(burgerMenuSlice.actions.toggleMenu());
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      screenWidth <= 768 && dispatch(burgerMenuSlice.actions.closeMenu());
    }

  };

  const navbarListStyle = screenWidth <= 768 ? `${styles.navbarList} ${styles.navbarListMobile}` : styles.navbarList;


  return (
    <>
      <nav className={styles.navbar}>
        <ul className={menuOpen || screenWidth > 768 ? navbarListStyle : styles.navbarListHidden} >
          <Link to="/" className={styles.navbarLink} onClick={() => scrollToSection('about')}>About</Link>
          <Link to="/" className={styles.navbarLink} onClick={() => scrollToSection('projects')}>Projects</Link>
          <Link to="/" className={styles.navbarLink} onClick={() => scrollToSection('contacts')}>Contacts</Link>
        </ul>
      </nav>
      {screenWidth <= 768 ? <BurgerButton onButtonClick={onBurgerButtonClick} /> : null}
    </>
  )
}


export default Navbar;