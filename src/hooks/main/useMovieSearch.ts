import store from "storejs";
import { FormEvent } from "react";
import { useSetRecoilState} from "recoil";

import { IRMovie } from "../../types/apis/index.d";
import { ISearchInfo } from "../../types/movie/index.d";
import { getMovieListByNameAndPage } from "../../service/movie";
import { movieListState, searchInfoState } from "../../recoil/atoms";


const useSearchMovie = (scrollToTop: Function) => {

  const setMovieList = useSetRecoilState(movieListState);
  const setSearchInfo = useSetRecoilState(searchInfoState);

  const onSearchMovie = (searchInfo: ISearchInfo, e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if(searchInfo.title !== '' && !searchInfo.isLoading) {
      setSearchInfo((prev) => {
        return {...prev, page: 1, isLoading: true};
      });

      const localFavoriteMovieList = store.get('movie_favorites') || {};

      getMovieListByNameAndPage(searchInfo.title, 1)
      .then((data) => {
        setMovieList(data.Search.map((value) => {
          return {...value, isFavorite: Object.keys(localFavoriteMovieList).includes(value.imdbID)}; 
         }
       ));
       scrollToTop();
      })
      .catch(() => {
        setMovieList([] as IRMovie[]);
      })
      .finally(() => {
        setSearchInfo((prev) => {
          return {...prev, isLoading: false};
        });
      });
    }
  };

  return onSearchMovie;
};

export default useSearchMovie;