import useClickNav from "../../../hooks/useClickNav";
import styles from './mainNav.module.scss';

const MainNav = () => {

  const onClickNav = useClickNav();

  return(
    <nav className={styles.nav}>
      <button type='button' data-location='/' onClick={onClickNav}>메인</button>
      <button type='button' data-location='/favorites' onClick={onClickNav}>즐겨찾기</button>
    </nav>
  );
};

export default MainNav;