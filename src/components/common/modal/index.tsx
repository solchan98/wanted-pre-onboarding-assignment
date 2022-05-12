import cs from './modal.module.scss';

interface Props {
  close: Function,
}
const Modal = ({close}: Props) => {
  return(
    <section className={cs.backBoard}>
      <main>
        즐겨찾기 모달
        <button type="button" onClick={() => close(() => {})}>닫기</button>
      </main>
    </section>
  );
};

export default Modal;