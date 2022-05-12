import store from 'storejs';

import ms from '../main/main.module.scss';
import MainNav from '../../components/common/mainNav';
import useScroll from '../../hooks/common/useScroll';
import MovieItem from '../../components/common/movieItem';
import { useEffect, useRef, useState } from 'react';
import { IFavoriteMovie, IFavoriteMovies } from '../../types/movie/index.d';

const Favorites = () => {

  const [favoritMovieList, setFavoriteMovieList] = useState<IFavoriteMovie[]>([]);
  const [scrollRef] = useScroll();
  

  const interSectElId = useRef<number>(0);
  const clickElId = useRef<number>(0);

  const getInterSectionElementIndex = (index: number) => {
    return favoritMovieList.findIndex((movie) => movie.index  === index);
  };
  const onDragStart = (e: any) => {
    const { id } = e.currentTarget.dataset;
    clickElId.current = getInterSectionElementIndex(Number(id));
  };
  const onDragEnd = () => {

    const localMovieList = store.get('movie_favorites');
    setFavoriteMovieList((prev) => {
      const printData = [...prev];
      const grapItem = printData[clickElId.current];
      printData.splice(clickElId.current, 1);
      printData.splice(interSectElId.current, 0, grapItem);
      printData.forEach((movie, index) => { localMovieList[movie.imdbID].index = index; });
      store.set('movie_favorites', localMovieList);
      return printData;
    });
  };
  const onDragEnter = (e: any) => {
    const { id } = e.currentTarget.dataset;
    interSectElId.current = getInterSectionElementIndex(Number(id));
  };


  
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
              <li
                data-id={value.index}
                draggable
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                onDragEnter={onDragEnter}

                onDragOver={(e) => e.preventDefault()}
                key={`favorite_movie_${value.imdbID}_${index + 1}`}>
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