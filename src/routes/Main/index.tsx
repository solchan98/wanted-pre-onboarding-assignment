import cx from 'classnames';
import { useRecoilValue } from 'recoil';

import styles from './main.module.scss';
import MainNav from '../../components/common/mainNav';
import useScroll from '../../hooks/common/useScroll';
import MovieItem from '../../components/common/movieItem';
import SearchBar from '../../components/common/searchBar';
import useSearchMovie from '../../hooks/main/useMovieSearch';
import { movieListState } from '../../recoil/atoms';
import useMainScrollHandler from '../../hooks/main/useMainScrollHandler';
import Modal from '../../components/common/modal';
import useModal from '../../hooks/common/useModal';

const Main = () => {

  const movieList = useRecoilValue(movieListState);
  const [scrollRef, onScroll, scrollToTop] = useScroll();

  const onSearchMovie = useSearchMovie(scrollToTop);
  const onMainScrollHandler = useMainScrollHandler();

  const [isShowModal, openModal, closeModal] = useModal();

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
              <li key={`main_movie_${movie.imdbId}_${index + 1}`}>
                <MovieItem data={movie} openModal={openModal}/>
              </li>)
            : '검색결과가 없습니다.'
          }
        </ul>
      </main>
      <footer><MainNav /></footer>
      { isShowModal && <Modal close={closeModal}/> }
    </section>
  );
};

export default Main;