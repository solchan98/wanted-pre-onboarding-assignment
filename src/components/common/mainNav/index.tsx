import { NavLink } from "react-router-dom";

import { Favorites, Home } from "../../../assets/svgs";
import styles from './mainNav.module.scss';

const MainNav = () => {

  return(
    <nav className={styles.nav}>
      <NavLink to="/" className={prop => prop.isActive ? styles.navLinkOn : styles.navLinkOff}><Home /></NavLink>
      <NavLink to="/favorites" className={prop => prop.isActive ? styles.navLinkOn : styles.navLinkOff}><Favorites /></NavLink>
    </nav>
  );
};

export default MainNav;