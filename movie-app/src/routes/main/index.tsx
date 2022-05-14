import cx from 'classnames';
import { useRecoilValue } from 'recoil';


import Modal from '../../components/common/modal';
import styles from './main.module.scss';
import MainNav from '../../components/common/mainNav';
import useModal from '../../hooks/common/useModal';
import useScroll from '../../hooks/common/useScroll';
import MovieItem from '../../components/common/movieItem';
import SearchBar from '../../components/common/searchBar';
import NoResultImg from '../../assets/no-content.png';
import useSearchMovie from '../../hooks/main/useMovieSearch';
import { movieListState, searchInfoState } from '../../recoil/atoms';
import useMainScrollHandler from '../../hooks/main/useMainScrollHandler';

const Main = () => {

  const movieList = useRecoilValue(movieListState);
  const searchInfo = useRecoilValue(searchInfoState);

  const [scrollRef, onScroll, scrollToTop] = useScroll();

  const onSearchMovie = useSearchMovie(scrollToTop);

  const onMainScrollHandler = useMainScrollHandler();

  const [isShowModal, data, openModal, closeModal] = useModal();

  return(
    <section className={styles.mainSection}>
      <header className={styles.header}>
        <h2>MOVIES</h2>
        <SearchBar onSearch={onSearchMovie}/>
      </header>
      <main ref={scrollRef} onScroll={(e) => onScroll(e, onMainScrollHandler)}>
        { movieList.length ? 
          <ul>
            {movieList.map((movie, index) => 
              <li key={`main_movie_${movie.imdbID}_${index + 1}`}>
                <MovieItem data={movie} openModal={openModal}/>
              </li>)
            }
          </ul> : 
          <div className={styles.empty}>
            <img src={NoResultImg} className={styles.emptyImg} alt='empty_imagee'/>
            <h2>검색 결과가 없습니다.</h2>
          </div>
        }
        { searchInfo.isLoading && <div className={styles.loading} >...로딩중</div> }
      </main>
      <footer><MainNav /></footer>
      { isShowModal && <Modal close={closeModal} data={data}/> }
    </section>
  );
};

export default Main;