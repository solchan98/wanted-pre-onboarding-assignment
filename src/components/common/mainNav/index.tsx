import { Home, Star } from "../../../assets/svgs";
import useClickNav from "../../../hooks/useClickNav";
import styles from './mainNav.module.scss';

const MainNav = () => {

  const onClickNav = useClickNav();

  return(
    <nav className={styles.nav}>
      <button type='button' data-location='/' onClick={onClickNav} aria-label='Main Button'><Home /></button>
      <button type='button' data-location='/favorites' onClick={onClickNav} aria-label='Favorites Button'><Star /></button>
    </nav>
  );
};

export default MainNav;