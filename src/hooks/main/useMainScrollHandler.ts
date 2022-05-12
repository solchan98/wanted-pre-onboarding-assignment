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

      getMovieListByNameAndPage(searchInfo.title, searchInfo.page + 1)
      .then((data) => {
        setMovieList((prev) => [...prev, ...data.Search]);
      })
      .finally(() => {
        setTimeout(() => {
          setSearchInfo((prev) => {
            return {...prev, page: searchInfo.page + 1, isLoading: false};
          });
        }, TIME_OF_WAIE_TO_RECALL);
      });
    }
  };

  return onScrollHandler;
};

export default useMainScrollHandler;