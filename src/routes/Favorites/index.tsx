import store from 'storejs';

import ms from '../main/main.module.scss';
import MainNav from '../../components/common/mainNav';
import useScroll from '../../hooks/common/useScroll';
import MovieItem from '../../components/common/movieItem';
import { useEffect, useState } from 'react';
import { IFavoriteMovie, IFavoriteMovies } from '../../types/movie/index.d';

const Favorites = () => {

  const [favoritMovieList, setFavoriteMovieList] = useState<IFavoriteMovie[]>([]);
  const [scrollRef] = useScroll();
  
  useEffect(() => {
    const localMovieData: IFavoriteMovies = store.get('movie_favorites');
    const localMovieList = localMovieData ? Object.keys(localMovieData).map((key) => localMovieData[key]) : [];
    // localMovieList 정렬 
    localMovieList.sort((a, b) => {
      if(a.index < b.index) return -1;
      if(a.index > b.index) return 1;
      return 0;
    });
    setFavoriteMovieList(localMovieList);
  }, []);
  
  return(
    <section> 
      <header>
        <h2>FAVORITES</h2>
      </header>
      <main ref={scrollRef} className={ms.main}>
        <ul>
          { favoritMovieList.length
            ? favoritMovieList.map((value, index) => 
              <li key={`favorite_movie_${value.imdbID}_${index + 1}`}>
                <MovieItem data={value} openModal={() => {}} />
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