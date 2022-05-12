import { SyntheticEvent } from 'react';

import styles from './movieItem.module.scss';
import { Star } from '../../../assets/svgs';
import { IRMovie } from '../../../types/apis/index.d';
import { REPLACE_IMG_URL, NON_IMAGE } from '../../../constant';

interface Props {
  data: IRMovie,
  openModal: Function,
}

const MovieItem = ({ data, openModal }: Props) => {

  const handleImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = REPLACE_IMG_URL;
  };

  return(
    <section 
      className={styles.movieItem} 
      role="button" 
      tabIndex={0}
      onClick={() => openModal(data)}
      draggable
      onDrag={(e) => {
        console.log(e.currentTarget)
      }}
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
      { data.isFavorite && <Star />}
    </section>
  );
};

export default MovieItem;