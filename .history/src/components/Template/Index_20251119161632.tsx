import styles from "./index.module.css";
import Container from "../Container/Index";

interface TemplateProps {
  title: string;
  className?: string; // classes adicionais
  children?: React.ReactNode;
}

const Template = ({ title, className, children }: TemplateProps) => {
  return (
    <template
      className={`${styles["template"]} ${className ? className : ""}`.trim()}
    >
      <Container>
        <div className="col gap-1">
          <h2 className={styles["templateTitle"]}>{title}</h2>
        </div>
        <div className={styles["templateContent"]}>{children}</div>
      </Container>
    </template>
  );
};

export default Template;
