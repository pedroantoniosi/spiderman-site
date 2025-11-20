import styles from "./index.module.css";
const cardImg = "../../assets/card.jpg";

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
        <h2>Spiderman</h2>
      </div>
    </div>
  );
};

export default Card;
