import styles from "./index.module.css";

interface CardProps {
  className?: string; // classes adicionais
  children?: React.ReactNode;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div className={`${styles["card"]} ${className ? className : ""}`.trim()}>
      {text}
    </div>
  );
};

export default Card;
