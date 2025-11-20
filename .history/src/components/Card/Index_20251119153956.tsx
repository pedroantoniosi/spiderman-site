import styles from "./index.module.css";

interface ButtonProps {
  className?: string; // classes adicionais
  children?: React.ReactNode;
}

const Card = ({ children, className }: ButtonProps) => {
  return (
    <div className={`${styles["card"]} ${className ? className : ""}`.trim()}>
      {text}
    </div>
  );
};

export default Card;
