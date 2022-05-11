import { getMovieListByNameAndPage } from "../../service/movie";
import { SetterOrUpdater } from "recoil";
// eslint-disable-next-line import/extensions
import { ISearchInfo } from "../../types/movie";
// eslint-disable-next-line import/extensions
import { IRMovie } from "../../types/apis";

interface Props {
  searchInfo: ISearchInfo,
  setMovieList: SetterOrUpdater<IRMovie[]>,
  setSearchInfo: SetterOrUpdater<ISearchInfo>,
}

const useMainScrollHandler = ({searchInfo, setMovieList, setSearchInfo}: Props) => {
  const onScrollHandler = () => {
    getMovieListByNameAndPage(searchInfo.title, searchInfo.page + 1)
      .then((data) => {
        setMovieList((prev) => prev.length ? [...prev, ...data] : data);
        setSearchInfo((prev) => {
          return {...prev, page: searchInfo.page + 1};
        });
      });
  };

  return onScrollHandler;
};

export default useMainScrollHandler;