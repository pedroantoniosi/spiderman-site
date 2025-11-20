import styles from "./index.module.css";
import cardImg from "../../assets/card.jpg";

interface CardProps {
  className?: string; // classes adicionais
  children?: React.ReactNode;
}

const Card = ({ className }: CardProps) => {
  return (
    <div className={`${styles["card"]} ${className ? className : ""}`.trim()}>
      <div className={styles.cardImg}>
        <img src={cardImg} alt="" />
      </div>
      <div className={styles.cardCaption}>
        <h2 className={styles.cardTitle}>
          Traje de 'Homem-Aranha: Um Novo Dia' Revelado
        </h2>
        <div className={styles.cardMisc}>
          <span>
            <i className="bi bi-file-person-fill"></i>
          </span>
          <span>Autor</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
