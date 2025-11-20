import homeStyles from "./home.module.css";
import aboutStyles from "./about.module.css";
import Container from "../../components/Container/Index";
import Template from "../../components/Template/Index";
import Button from "../../components/Button/Index";
import Card from "../../components/Card/Index";
const cardImg = "../../assets/card.jpg";

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
        <Container>
          <Template title="As Mais Lidas">
            <Card>
              <div>
                <img src={cardImg} alt="" />
              </div>
              <div className={homeStyles.cardCaption}>
                <h2>Spiderman</h2>
              </div>
            </Card>
            <Card>
              <div>
                <img src={cardImg} alt="" />
              </div>
              <div className={homeStyles.cardCaption}>
                <h2>Spiderman</h2>
              </div>
            </Card>
            <Card>
              <div>
                <img src={cardImg} alt="" />
              </div>
              <div className={homeStyles.cardCaption}>
                <h2>Spiderman</h2>
              </div>
            </Card>
            <Card>
              <div>
                <img src={cardImg} alt="" />
              </div>
              <div className={homeStyles.cardCaption}>
                <h2>Spiderman</h2>
              </div>
            </Card>
          </Template>
        </Container>
      </section>
      <section className={aboutStyles.aboutContainer}></section>
    </>
  );
};

export default Home;
