import styles from './Main.module.scss';

const Main = () => {
  return(
    <section>
      <header>
        <h2>MOVIES</h2>
        <form>
          <input placeholder='검색어를 입력하세요'/>
          <button type='button'>검색</button>
        </form>
      </header>
      <main className={styles.main}>
        메인
      </main>
      <footer>
        푸터
      </footer>
    </section>
  );
};

export default Main;