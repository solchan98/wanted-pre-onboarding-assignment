import ms from '../main/main.module.scss';
import MainNav from '../../components/common/mainNav';

const Favorites = () => {
  return(
    <section> 
      <header>
        <h2>FAVORITES</h2>
      </header>
      <main className={ms.main}>
        <ul>
          {/* <li><MovieItem /></li> */}
        </ul>
      </main>
      <footer><MainNav /></footer>
    </section>
  );
};

export default Favorites;