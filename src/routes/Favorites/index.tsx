import store from 'storejs';
import { useSetRecoilState } from 'recoil';
import { useEffect, useState } from 'react';

import fs from './favorites.module.scss';
import Modal from '../../components/common/modal';
import MainNav from '../../components/common/mainNav';
import useModal from '../../hooks/common/useModal';
import useScroll from '../../hooks/common/useScroll';
import MovieItem from '../../components/common/movieItem';
import NoResultImg from '../../assets/no-content.png';
import useDragAndDrop from '../../hooks/favorites/useDragAndDrop';
import { movieListState } from '../../recoil/atoms';
import useFavoriteHandle from '../../hooks/common/useFavoriteHandle';
import { IFavoriteMovie, IFavoriteMovies } from '../../types/movie/index.d';

const Favorites = () => {

  const [favoritMovieList, setFavoriteMovieList] = useState<IFavoriteMovie[]>([]);
  const setMovieList = useSetRecoilState(movieListState);
  
  const [scrollRef] = useScroll();
  const [onDragStart, onDragEnd, onDragEnter, onDragOver] = useDragAndDrop(favoritMovieList, setFavoriteMovieList);

  const { addFavorites, removeFavorites } = useFavoriteHandle({ setMovieList, setFavoriteMovieList });

  const [isShowModal, data, openModal, closeModal] = useModal({addFavorites, removeFavorites});

  useEffect(() => {
    const localMovieData: IFavoriteMovies = store.get(String(process.env.REACT_APP_LOCAL_FAVORITES_KEY));
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
    <section className={fs.mainSection}> 
      <header>
        <h2>FAVORITES</h2>
      </header>
      <main ref={scrollRef} className={fs.main}>
        { favoritMovieList.length ? 
          <ul onDragOver={onDragOver}>
            { favoritMovieList.map((value, index) => 
              <li
                data-id={value.index}
                draggable
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                onDragEnter={onDragEnter}
                onDragOver={onDragOver}
                key={`favorite_movie_${value.imdbID}_${index + 1}`}>
                <MovieItem data={value} openModal={openModal} />
              </li>)
            }
          </ul> : 
          <div className={fs.empty}>
            <img src={NoResultImg} className={fs.emptyImg} alt='empty_imagee'/>
            <h2>즐겨찾기가 존재하지 않습니다.</h2>
          </div>
        }
      </main>
      <footer><MainNav /></footer>
      { isShowModal && <Modal close={closeModal} data={data}/> }
    </section>
  );
};

export default Favorites;