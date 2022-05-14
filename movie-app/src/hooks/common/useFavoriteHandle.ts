import store from 'storejs';
import { SetterOrUpdater } from 'recoil';

import { IRMovie } from "../../types/apis/index.d";
import { IFavoriteMovie, IFavoriteMovies } from "../../types/movie/index.d";

interface Props {
  setMovieList: SetterOrUpdater<IRMovie[]>,
  setFavoriteList: SetterOrUpdater<IFavoriteMovie[]>,
}

interface ReturnTypes {
  addFavorites: (movie: IRMovie) => void, 
  removeFavorites: (movie: IRMovie) => void,
}

const useFavoriteHandle = ({ setMovieList, setFavoriteList }: Props): ReturnTypes => {

  const addFavorites = (movie: IRMovie) => {
    const localFavoriteMovieList = store.get(String(process.env.REACT_APP_LOCAL_FAVORITES_KEY)) || {};
    const localFavoriteMovieCnt = store.get(String(process.env.REACT_APP_LOCAL_FAVORITE_LAST_INDEX)) || 0;
    const isIn: boolean = Object.keys(localFavoriteMovieList).includes(movie.imdbID);
    if(!isIn) {
      localFavoriteMovieList[movie.imdbID] = {...movie, isFavorite: true, index: localFavoriteMovieCnt + 1};
      store.set(String(process.env.REACT_APP_LOCAL_FAVORITE_LAST_INDEX), localFavoriteMovieCnt + 1);
      store.set(String(process.env.REACT_APP_LOCAL_FAVORITES_KEY), localFavoriteMovieList);
      setMovieList((prev) => prev.map((item) => (item.imdbID === movie.imdbID) ? { ...item, isFavorite: true}  : item));
    }
  };

  const removeFavorites = (data: IRMovie) => {
    const localFavoriteMovieList: IFavoriteMovies = store.get(String(process.env.REACT_APP_LOCAL_FAVORITES_KEY));
    delete localFavoriteMovieList[data.imdbID];
    store.set(String(process.env.REACT_APP_LOCAL_FAVORITES_KEY), localFavoriteMovieList);
    setMovieList((prev) => prev.map((item) => (item.imdbID === data.imdbID) ? { ...item, isFavorite: false}  : item));
    setFavoriteList((prev) => prev.filter((item) => item.imdbID !== data.imdbID));
  };

  return {addFavorites, removeFavorites};
};

export default useFavoriteHandle;