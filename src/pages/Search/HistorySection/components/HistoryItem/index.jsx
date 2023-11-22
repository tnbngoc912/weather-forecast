import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import Style from "./style.js";

const HistoryItem = ({ title, onClick, onDelete }) => {
  return (
    <Style onClick={onClick}>
      <FontAwesomeIcon icon={faClockRotateLeft} color="#333" />
      <p>{title}</p>
      <div
        className="icon-delete"
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
      >
        <span>✕</span>
      </div>
    </Style>
  );
};

export default HistoryItem;
