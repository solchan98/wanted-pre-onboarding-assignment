import { useRecoilState } from "recoil";

import { TIME_OF_WAIE_TO_RECALL } from "../../constant";
import { getMovieListByNameAndPage } from "../../service/movie";
import { movieListState, searchInfoState } from "../../recoil/atoms";

const useMainScrollHandler = () => {

  const [searchInfo, setSearchInfo] = useRecoilState(searchInfoState);
  const [movieList, setMovieList] = useRecoilState(movieListState);

  const onScrollHandler = async () => {
    if(!searchInfo.isLoading && movieList.length !== searchInfo.totalResult) {
      setSearchInfo((prev) => {
        return {...prev, isLoading: true};
      });

      const data = await getMovieListByNameAndPage(searchInfo.title, searchInfo.page + 1);
      setMovieList((prev) => [...prev, ...data.Search]);

      setTimeout(() => {
        setSearchInfo((prev) => {
          return {...prev, page: searchInfo.page + 1, isLoading: false, totalResult: Number(data.totalResults)};
        });
      }, TIME_OF_WAIE_TO_RECALL);
    }
  };

  return onScrollHandler;
};

export default useMainScrollHandler;