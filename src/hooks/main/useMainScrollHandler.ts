import { useRecoilState, useSetRecoilState } from "recoil";

import { TIME_OF_WAIE_TO_RECALL } from "../../constant";
import { getMovieListByNameAndPage } from "../../service/movie";
import { movieListState, searchInfoState } from "../../recoil/atoms";

const useMainScrollHandler = () => {

  const [searchInfo, setSearchInfo] = useRecoilState(searchInfoState);
  const setMovieList = useSetRecoilState(movieListState);

  const onScrollHandler = async () => {
    if(!searchInfo.isLoading ) {
      setSearchInfo((prev) => {
        return {...prev, isLoading: true};
      });

      const data = await getMovieListByNameAndPage(searchInfo.title, searchInfo.page + 1);
      setMovieList((prev) => [...prev, ...data]);

      setTimeout(() => {
        setSearchInfo((prev) => {
          return {...prev, page: searchInfo.page + 1, isLoading: false};
        });
      }, TIME_OF_WAIE_TO_RECALL);
    }
  };

  return onScrollHandler;
};

export default useMainScrollHandler;