import homeStyles from "./home.module.css";
import aboutStyles from "./about.module.css";
import "./news.css";
import Container from "../../components/Container/Index";
import Template from "../../components/Template/Index";
import Button from "../../components/Button/Index";
import Card from "../../components/Card/Index";

const Home = () => {
  return (
    <>
      <section className={homeStyles.homeContainer}>
        <Container>
          <div className={homeStyles.homeCaption}>
            <h2 className={homeStyles.homeTitle}>
              Mergulhe no Universo do Homem-Aranha
            </h2>
            <p className={homeStyles.homeText}>
              Descubra as histórias mais icônicas do Amigão da Vizinhança. Entre
              para essa aventura repleta de ação e emoção!
            </p>
            <Button text="Ler Agora"></Button>
          </div>
        </Container>
      </section>
      <section>
        <Template title="HQ Populares">
          <Card />
          <Card />
          <Card />
          <Card />
        </Template>
      </section>

      <section>
        <Container>
          <div title="Noticias" className="newsContainer">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </Container>
      </section>

      <section>
        <Template title="Em breve">
          <Card />
          <Card />
          <Card />
          <Card />
        </Template>
      </section>

      <section className={aboutStyles.aboutContainer}></section>
    </>
  );
};

export default Home;
