import styles from './searchBar.module.scss';
import { Search } from '../../../assets/svgs/index';

const SearchBar = () => {
  return(
    <form onSubmit={(e) => { e.preventDefault(); console.log('click!')}}>
      <input type='text' placeholder='검색어를 입력하세요'/>
      <Search className={styles.search} />
    </form>
  );
};

export default SearchBar;