import styles from "./index.css";
import Container from "../Container/Index";

interface TemplateProps {
  title: string;
  className?: string; // classes adicionais
  children?: React.ReactNode;
}

const Template = ({ title, className, children }: TemplateProps) => {
  return (
    <template className="template">
      <Container>
        <div className="col gap-1">
          <h2 className="templateTitle">{title}</h2>
        </div>
        <div className="templateTitle">{children}</div>
      </Container>
    </template>
  );
};

export default Template;
