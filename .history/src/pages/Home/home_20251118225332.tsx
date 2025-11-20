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
            Descubra as histórias mais icônicas do Amigão da Vizinhança. Entre
            para essa aventura repleta de ação e emoção!
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
