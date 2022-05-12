import cx from 'classnames';
import { useRecoilState } from 'recoil';

import Modal from '../../components/common/modal';
import styles from './main.module.scss';
import MainNav from '../../components/common/mainNav';
import useModal from '../../hooks/common/useModal';
import useScroll from '../../hooks/common/useScroll';
import MovieItem from '../../components/common/movieItem';
import SearchBar from '../../components/common/searchBar';
import useSearchMovie from '../../hooks/main/useMovieSearch';
import { movieListState } from '../../recoil/atoms';
import useFavoriteHandle from '../../hooks/common/useFavoriteHandle';
import useMainScrollHandler from '../../hooks/main/useMainScrollHandler';

const Main = () => {

  const [movieList, setMovieList] = useRecoilState(movieListState);
  const [scrollRef, onScroll, scrollToTop] = useScroll();

  const onSearchMovie = useSearchMovie(scrollToTop);
  const onMainScrollHandler = useMainScrollHandler();

  const { addFavorites, removeFavorites } = useFavoriteHandle({ setMovieList });

  const [isShowModal, data, openModal, closeModal] = useModal({addFavorites, removeFavorites});


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