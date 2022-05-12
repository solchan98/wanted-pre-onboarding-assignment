import { MouseEventHandler, SyntheticEvent } from 'react';

import cs from './modal.module.scss';
// eslint-disable-next-line import/extensions
import { IRMovie } from '../../../types/apis';
import { NON_IMAGE, REPLACE_IMG_URL } from '../../../constant';

interface Props {
  data: IRMovie,
  close: MouseEventHandler<HTMLButtonElement>,
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
            <button type="button" onClick={close}>{`즐겨찾기 ${data.isFavorite ? '삭제' : '추가'}`}</button>
          </aside>
        </div>
      </main>
    </section>
  );
};

export default Modal;