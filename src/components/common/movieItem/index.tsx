import styles from './movieItem.module.scss';
import { Star } from '../../../assets/svgs';

const MovieItem = () => {
  return(
    <section 
      className={styles.movieItem} 
      role="button" 
      tabIndex={0} // TODO onClick() - 즐겨찾기 추가 혹은 제거 모달 이벤트
    >
      <img 
        src='https://m.media-amazon.com/images/M/MV5BYTQwNDE5ZjMtNmNkNi00Y2VkLTllNzktMzNjMjYzNThmMmQ3XkEyXkFqcGdeQXVyMTYwNjUwODU@._V1_SX300.jpg' 
        alt='moive_poster'
      />
      <div className={styles.moiveInfo}>
        <strong>Fight club</strong>
        <p>Year: 2019</p>
        <p>Type: movie</p>
      </div>
      <Star />
    </section>
  );
};

export default MovieItem;