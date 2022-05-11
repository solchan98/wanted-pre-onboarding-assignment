import { FormEvent } from 'react';
import { useRecoilState } from 'recoil';
import cx from 'classnames';

import MainNav from '../../components/common/mainNav';
import MovieItem from '../../components/common/movieItem';
import SearchBar from '../../components/common/searchBar';
import useScroll from '../../hooks/useScroll';
import { movieListState, searchInfoState } from '../../recoil/atoms';
import { getMovieListByNameAndPage } from '../../service/movie';
import styles from './Main.module.scss';
// eslint-disable-next-line import/extensions
import { ISearchInfo } from '../../types/movie';

const Main = () => {

  const [movieList, setMovieList] = useRecoilState(movieListState);
  const [scrollRef, onScroll, scrollToTop] = useScroll();

  const [{title, page}, setSearchInfo] = useRecoilState(searchInfoState);

  const onMovieSearch = (searchInfo: ISearchInfo, e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if(searchInfo.title !== '') {
      getMovieListByNameAndPage(searchInfo.title, 1)
      .then((data) => {
        setMovieList(data);
        setSearchInfo((prev) => {
          return {...prev, page: 1};
        });
        scrollToTop();
      });
    }
  };

  const onScrollHandler = () => {
    getMovieListByNameAndPage(title, page + 1)
      .then((data) => {
        setMovieList((prev) => prev.length ? [...prev, ...data] : data);
        setSearchInfo((prev) => {
          return {...prev, page: page + 1};
        });
      });
  };

  return(
    <section>
      <header>
        <h2>MOVIES</h2>
        <SearchBar onSearch={onMovieSearch}/>
      </header>
      <main ref={scrollRef} className={cx(styles.main, movieList.length && styles.on)} onScroll={(e) => onScroll(e, onScrollHandler)}>
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