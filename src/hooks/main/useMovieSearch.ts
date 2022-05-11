import { FormEvent } from "react";
import { useSetRecoilState} from "recoil";

// eslint-disable-next-line import/extensions
import { ISearchInfo } from "../../types/movie";
import { TIME_OF_WAIE_TO_RECALL } from "../../constant";
import { getMovieListByNameAndPage } from "../../service/movie";
import { movieListState, searchInfoState } from "../../recoil/atoms";

const useSearchMovie = (scrollToTop: Function) => {

  const setMovieList = useSetRecoilState(movieListState);
  const setSearchInfo = useSetRecoilState(searchInfoState);

  const onSearchMovie = async (searchInfo: ISearchInfo, e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if(searchInfo.title !== '' && !searchInfo.isLoading) {
      setSearchInfo((prev) => {
        return {...prev, page: 1, isLoading: true};
      });

      const data = await getMovieListByNameAndPage(searchInfo.title, 1);
      setMovieList(data.Search);
      scrollToTop();

      setTimeout(() => {
        setSearchInfo((prev) => {
          return {...prev, isLoading: false};
        });
      }, TIME_OF_WAIE_TO_RECALL);
    }
  };

  return onSearchMovie;
};

export default useSearchMovie;