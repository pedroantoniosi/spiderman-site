import homeStyles from "./home.module.css";
import aboutStyles from "./about.module.css";
import "./news.css";
import Container from "../../components/Container/Index";
import Template from "../../components/Template/Index";
import Button from "../../components/Button/Index";
import CardHq from "../../components/CardHq/Index";
import CardNews from "../../components/CardNews/Index";

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
          <CardHq />
          <CardHq />
          <CardHq />
          <CardHq />
        </Template>
      </section>

      <section>
        <Container>
          <div title="Noticias" className="newsContainer">
            <h2 className="title">Últimas Notícias</h2>
            <div className="newsContent row-md gap-1">
              <div className="col gap-1">
                <CardNews />
                <CardNews />
                <CardNews />
                <CardNews />
              </div>
              <div className="col gap-1">
                <CardNews />
                <CardNews />
                <CardNews />
                <CardNews />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Template title="Em breve">
          <CardHq />
          <CardHq />
          <CardHq />
          <CardHq />
        </Template>
      </section>

      <section className={aboutStyles.aboutContainer}>
        <Container>
          <div className={aboutStyles.aboutContent}>
            <div className={aboutStyles.aboutCaption}>
              <h2 className={aboutStyles.aboutTitle}>Sobre</h2>
              <p className={aboutStyles.aboutText}>
                Aqui você encontra um universo inteiro dedicado ao Amigo da
                Vizinhança, com as últimas novidades do cinema, da TV, dos games
                e das HQs, além de segredos, resenhas e conteúdos feitos sob
                medida para fãs de todas as gerações.
                <br />
                <br />
                Criamos este site para quem leva a sério a máxima de que grandes
                poderes trazem grandes responsabilidades. você nunca viu!
              </p>
              <Button text="Saber Mais"></Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
