import homeStyles from "./home.module.css";
import aboutStyles from "./about.module.css";

const Home = () => {
  return (
    <>
      <section className={homeStyles.homeContainer}>
        <div className={homeStyles.homeCaption}>
          <h2 className={homeStyles.homeTitle}>
            Mergulhe no Universo do Homem-Aranha
          </h2>
          <p className={homeStyles.homeText}>
            Descubra as histórias mais icônicas do Amigão da Vizinhança. Entre
            para essa aventura repleta de ação e emoção!
          </p>
        </div>
      </section>
      <section></section>
      <section className={aboutStyles.aboutContainer}></section>
    </>
  );
};

export default Home;
