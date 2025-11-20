import styles from "./Index.module.css";
import Container from "../Container/Index";

interface TemplateProps {
  title: string;
  subtitle?: string;
  className?: string; // classes adicionais
  children?: React.ReactNode;
}

const Template = ({ className }: TemplateProps) => {
  return (
    <template
      className={`${styles["template"]} ${className ? className : ""}`.trim()}
    ></template>
  );
};

export default Template;
