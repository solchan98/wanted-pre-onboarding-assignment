import store from 'storejs';

import ms from '../main/main.module.scss';
import MainNav from '../../components/common/mainNav';
import useScroll from '../../hooks/common/useScroll';
import MovieItem from '../../components/common/movieItem';
import { useEffect, useState } from 'react';
import { IFavoriteMovies } from '../../types/movie/index.d';

const Favorites = () => {

  const [favoritMovieList, setFavoriteMovieList] = useState<IFavoriteMovies>({});
  const [scrollRef] = useScroll();
  
  useEffect(() => {
    setFavoriteMovieList(store.get('movie_favorites'));
  }, []);


  return(
    <section> 
      <header>
        <h2>FAVORITES</h2>
      </header>
      <main ref={scrollRef} className={ms.main}>
        <ul>
          { favoritMovieList 
            ? Object.keys(favoritMovieList).map((key, index) => 
              <li key={`main_movie_${favoritMovieList[key].imdbID}_${index + 1}`}>
                <MovieItem data={favoritMovieList[key]} openModal={() => {}}/>
              </li>)
            : '즐겨찾기가 존재하지 않습니다.'
          }
        </ul>
      </main>
      <footer><MainNav /></footer>
    </section>
  );
};

export default Favorites;