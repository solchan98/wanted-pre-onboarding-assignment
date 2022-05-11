import { useRecoilState } from 'recoil';
import cx from 'classnames';

import { movieListState, searchInfoState } from '../../recoil/atoms';
// eslint-disable-next-line import/extensions
import useMainScrollHandler from '../../hooks/main/useMainScrollHandler';
import useSearchMovie from '../../hooks/main/useMovieSearch';
import MovieItem from '../../components/common/movieItem';
import SearchBar from '../../components/common/searchBar';
import useScroll from '../../hooks/common/useScroll';
import MainNav from '../../components/common/mainNav';
import styles from './main.module.scss';

const Main = () => {

  const [movieList, setMovieList] = useRecoilState(movieListState);
  const [scrollRef, onScroll, scrollToTop] = useScroll();
  const [searchInfo, setSearchInfo] = useRecoilState(searchInfoState);

  const onSearchMovie = useSearchMovie({setMovieList, setSearchInfo, scrollToTop});
  const onMainScrollHandler = useMainScrollHandler({searchInfo, setMovieList, setSearchInfo});

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
                <MovieItem data={movie} />
              </li>)
            : '검색결과가 없습니다.'
          }
        </ul>
      </main>
      <footer><MainNav /></footer>
    </section>
  );
};

export default Main;