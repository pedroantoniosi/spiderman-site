import styles from "./index.module.css";

interface ButtonProps {
  text: string;
  className?: string; // classes adicionais
  children?: React.ReactNode;
}

const Card = ({ text, className }: ButtonProps) => {
  return (
    <div className={`${styles["card"]} ${className ? className : ""}`.trim()}>
      {text}
    </div>
  );
};

export default Card;
