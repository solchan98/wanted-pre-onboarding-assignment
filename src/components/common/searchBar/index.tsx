import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';

import { searchInfoState } from '../../../recoil/atoms';
import { Search } from '../../../assets/svgs/index';
import styles from './searchBar.module.scss';

interface Props {
  onSearch: Function,
}

const SearchBar = ({onSearch}: Props) => {

  const [searchInfo, setSearchInfo] = useRecoilState(searchInfoState);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInfo((prev) => {
      return {...prev, title: e.currentTarget.value};
    });
  };

  return(
    <form onSubmit={(e) => onSearch(searchInfo, e)} >
      <input type='text' value={searchInfo.title} onChange={onInputChange} placeholder='검색어를 입력하세요'/>
      <button type='submit' aria-label='btn'><Search className={styles.search} /></button>
    </form>
  );
};

export default SearchBar;