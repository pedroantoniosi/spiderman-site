import styles from "./index.module.css";
const cardImg = "../../assets/card.jpg";

interface CardProps {
  className?: string; // classes adicionais
  children?: React.ReactNode;
}

const Card = ({ className }: CardProps) => {
  return (
    <div className={`${styles["card"]} ${className ? className : ""}`.trim()}>
      <div className={styles.cardImg}></div>
    </div>
  );
};

export default Card;
