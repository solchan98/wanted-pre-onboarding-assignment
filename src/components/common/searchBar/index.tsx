import styles from './searchBar.module.scss';
import { Search } from '../../../assets/svgs/index';
import { ChangeEvent, useState } from 'react';

interface Props {
  onSearch: Function,
}

const SearchBar = ({onSearch}: Props) => {

  const [inputState, setInputState] = useState('');

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputState(e.currentTarget.value);
  };

  return(
    <form onSubmit={(e) => onSearch(inputState, e)} >
      <input type='text' value={inputState} onChange={onInputChange} placeholder='검색어를 입력하세요'/>
      <button type='submit' aria-label='btn'><Search className={styles.search} /></button>
    </form>
  );
};

export default SearchBar;