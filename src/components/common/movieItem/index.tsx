import { SyntheticEvent } from 'react';

import styles from './movieItem.module.scss';
import { Star } from '../../../assets/svgs';
// eslint-disable-next-line import/extensions
import { IRMovie } from '../../../types/apis';

interface Props {
  data: IRMovie,
}

const NON_IMAGE: string = 'N/A';
const REPLACE_IMG_URL = 'https://img.cgv.co.kr/GiftStore/Product/Pc/List/15463252009160.jpg';

const MovieItem = ({ data }: Props) => {

  const handleImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = REPLACE_IMG_URL;
  };

  return(
    <section 
      className={styles.movieItem} 
      role="button" 
      tabIndex={0} // TODO +onClick() - 즐겨찾기 추가 혹은 제거 모달 이벤트
    >
      <img 
        src={data.Poster !== NON_IMAGE ? data.Poster : REPLACE_IMG_URL}
        alt='moive_poster'
        onError={handleImageError}
      />
      <div className={styles.moiveInfo}>
        <strong>{data.Title}</strong>
        <p>{`Year: ${data.Year}`}</p>
        <p>{`Type: ${data.Type}`}</p>
      </div>
      <Star />
    </section>
  );
};

export default MovieItem;