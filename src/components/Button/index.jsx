import Style from "./style.js";

const Button = ({ disabled, type, children, onClick }) => {
  return (
    <Style
      className={type === "primary" ? "btn--primary" : "btn--secondary"}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Style>
  );
};

export default Button;
