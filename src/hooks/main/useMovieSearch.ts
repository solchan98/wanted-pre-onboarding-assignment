import { FormEvent } from "react";
import { SetterOrUpdater} from "recoil";
import { getMovieListByNameAndPage } from "../../service/movie";
// eslint-disable-next-line import/extensions
import { IRMovie } from "../../types/apis";
// eslint-disable-next-line import/extensions
import { ISearchInfo } from "../../types/movie";

interface Props {
  setMovieList: SetterOrUpdater<IRMovie[]>,
  setSearchInfo: SetterOrUpdater<ISearchInfo>,
  scrollToTop: Function,
}

const useSearchMovie = ({setMovieList, setSearchInfo, scrollToTop}: Props) => {
  const onSearchMovie = (searchInfo: ISearchInfo, e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if(searchInfo.title !== '') {
      getMovieListByNameAndPage(searchInfo.title, 1)
      .then((data) => {
        setMovieList(data);
        setSearchInfo((prev) => {
          return {...prev, page: 1};
        });
        scrollToTop();
      });
    }
  };

  return onSearchMovie;
};

export default useSearchMovie;