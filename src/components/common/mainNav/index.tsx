import { Favorites, Home } from "../../../assets/svgs";
import useClickNav from "../../../hooks/useClickNav";
import styles from './mainNav.module.scss';

const MainNav = () => {

  const [selectState, ,onClickBtn]  = useClickNav('/');

  return(
    <nav className={styles.nav}>
      <button type='button' data-location='/' onClick={onClickBtn} aria-label='Main Button'>
        <Home fill={selectState === '/' ? '#a8a8a8' : '#000'}/>
      </button>
      <button type='button' data-location='/favorites' onClick={onClickBtn} aria-label='Favorites Button'>
        <Favorites fill={selectState === '/favorites' ? '#a8a8a8' : '#000'}/>
      </button>
    </nav>
  );
};

export default MainNav;