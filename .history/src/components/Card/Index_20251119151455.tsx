import styles from "./index.module.css";

interface ButtonProps {
  text: string;
  className?: string; // classes adicionais
}

const Card = ({ text, className }: ButtonProps) => {
  return (
    <button
      className={`${styles["button"]} ${className ? className : ""}`.trim()}
    >
      {text}
    </button>
  );
};

export default Card;
