import cx from 'classnames';
import store from 'storejs';
import { useRecoilState } from 'recoil';

import Modal from '../../components/common/modal';
import styles from './main.module.scss';
import MainNav from '../../components/common/mainNav';
import useModal from '../../hooks/common/useModal';
import useScroll from '../../hooks/common/useScroll';
import MovieItem from '../../components/common/movieItem';
import SearchBar from '../../components/common/searchBar';
import { IRMovie } from '../../types/apis/index.d';
import useSearchMovie from '../../hooks/main/useMovieSearch';
import { movieListState } from '../../recoil/atoms';
import useMainScrollHandler from '../../hooks/main/useMainScrollHandler';

const Main = () => {

  const [movieList, setMovieList] = useRecoilState(movieListState);
  const [scrollRef, onScroll, scrollToTop] = useScroll();

  const onSearchMovie = useSearchMovie(scrollToTop);
  const onMainScrollHandler = useMainScrollHandler();

  /** Add Favorites Handler */
  const addFavorites = (movieF: IRMovie) => {
    const localFavoriteMovieList = store.get('movie_favorites') || {};
    const isIn: boolean = Object.keys(localFavoriteMovieList).includes(movieF.imdbID);
    if(!isIn) {
      localFavoriteMovieList[movieF.imdbID] = movieF;
      store.set('movie_favorites', localFavoriteMovieList);
      setMovieList((prev) => prev.map((item) => (item.imdbID === movieF.imdbID) ? { ...item, isFavorite: true}  : item));
    }
  };

  const [isShowModal, data, openModal, closeModal] = useModal(addFavorites);

  return(
    <section>
      <header>
        <h2>MOVIES</h2>
        <SearchBar onSearch={onSearchMovie}/>
      </header>
      <main ref={scrollRef} className={cx(styles.main, movieList.length && styles.on)} onScroll={(e) => onScroll(e, onMainScrollHandler)}>
        <ul>
          { movieList.length !== 0 
            ? movieList.map((movie, index) => 
              <li key={`main_movie_${movie.imdbID}_${index + 1}`}>
                <MovieItem data={movie} openModal={openModal}/>
              </li>)
            : '검색결과가 없습니다.'
          }
        </ul>
      </main>
      <footer><MainNav /></footer>
      { isShowModal && <Modal close={closeModal} data={data}/> }
    </section>
  );
};

export default Main;