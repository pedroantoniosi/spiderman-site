import styles from "./index.module.css";

const Home = () => {
  return (
    <>
      <section className={styles.homeContainer}>
        <div className={styles.homeCaption}>
          <h2 className={styles.homeTitle}>
            Mergulhe no Universo do Homem-Aranha
          </h2>
          <p className={styles.homeText}>
            Encontre os melhores hoteis e lugares para visitar no Japão.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
