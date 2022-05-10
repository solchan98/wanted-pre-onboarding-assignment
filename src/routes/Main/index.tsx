import MainNav from '../../components/common/mainNav';
import MovieItem from '../../components/common/movieItem';
import SearchBar from '../../components/common/searchBar';
import styles from './Main.module.scss';

const Main = () => {

  return(
    <section>
      <header>
        <h2>MOVIES</h2>
        <SearchBar />
      </header>
      <main className={styles.main}>
        <ul>
          <li>
            <MovieItem />
          </li>
        </ul>
      </main>
      <footer>
        <MainNav />
      </footer>
    </section>
  );
};

export default Main;