import { SyntheticEvent } from 'react';

import cs from './modal.module.scss';
import { IRMovie } from '../../../types/apis/index.d';
import { NON_IMAGE, REPLACE_IMG_URL } from '../../../constant';

interface Props {
  data: IRMovie,
  close: Function,
}

const Modal = ({data, close}: Props) => {

  const handleImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = REPLACE_IMG_URL;
  };

  return(
    <section className={cs.backBoard}>
      <main>
        <div className={cs.content}>
          <img 
            src={data.Poster !== NON_IMAGE ? data.Poster : REPLACE_IMG_URL}
            alt='moive_poster'
            onError={handleImageError}
          />
          <aside>
            <p>{data.Title}</p>
            <button type="button" onClick={() => close(data)}>{`즐겨찾기 ${data.isFavorite ? '삭제' : '추가'}`}</button>
          </aside>
        </div>
      </main>
    </section>
  );
};

export default Modal;