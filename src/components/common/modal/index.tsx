import cs from './modal.module.scss';
// eslint-disable-next-line import/extensions
import { IRMovie } from '../../../types/apis';

interface Props {
  data: IRMovie,
  close: Function,
}
const Modal = ({data, close}: Props) => {
  return(
    <section className={cs.backBoard}>
      <main>
        {data.Title}
        <button type="button" onClick={() => close(() => {})}>닫기</button>
      </main>
    </section>
  );
};

export default Modal;