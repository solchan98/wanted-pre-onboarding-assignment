import { NavLink } from "react-router-dom";

import styles from './mainNav.module.scss';
import { Favorites, Home } from "../../../assets/svgs";

const MainNav = () => {

  return(
    <nav className={styles.nav}>
      <NavLink to="/" className={prop => prop.isActive ? styles.navLinkOn : styles.navLinkOff}><Home /></NavLink>
      <NavLink to="/favorites" className={prop => prop.isActive ? styles.navLinkOn : styles.navLinkOff}><Favorites /></NavLink>
    </nav>
  );
};

export default MainNav;