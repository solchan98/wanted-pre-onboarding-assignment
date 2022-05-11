import { FormEvent } from 'react';
import { useRecoilState } from 'recoil';
import MainNav from '../../components/common/mainNav';
import MovieItem from '../../components/common/movieItem';
import SearchBar from '../../components/common/searchBar';
import { movieListState } from '../../recoil/atoms';
import { getMovieListByNameAndPage } from '../../service/movie';
import styles from './Main.module.scss';


const Main = () => {

  const [movieList, setMovieList] = useRecoilState(movieListState);

  const onMovieSearch = (name: string, e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if(name !== '') {
      getMovieListByNameAndPage(name, 1)
      .then((data) => {
        data.Response !== "False" ? setMovieList(data.Search) : setMovieList([]);
      });
    }
  };

  return(
    <section>
      <header>
        <h2>MOVIES</h2>
        <SearchBar onSearch={onMovieSearch}/>
      </header>
      <main className={styles.main}>
        <ul>
          { movieList.length !== 0 && movieList.map((movie, index) => 
            <li key={`main_movie_${movie.imdbId}_${index + 1}`}>
              <MovieItem data={movie} />
            </li>)
          }
        </ul>
      </main>
      <footer><MainNav /></footer>
    </section>
  );
};

export default Main;