import { useCallback } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Style from "./style";

const Input = ({ type = "text", placeholder, value, iconLeft, onChange}) => {
 
  const handleChange = useCallback((evt) => onChange(evt.target.value), [onChange]);

  return (
    <Style>   
    <input
      onChange={handleChange}
      placeholder={placeholder}
      style={{ padding: "0 40px" }}
      type={type}
      value={value}
    />
      <FontAwesomeIcon className="iconLeft" icon={iconLeft} />
     
  </Style>
  );
};

export default Input;
