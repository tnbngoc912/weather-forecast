import { Container } from "reactstrap";
import HistoryItem from "./components/HistoryItem/index.jsx";
import Style from "./style.js";

const HistorySection = ({ arrHistorySearch, onClick, onDelete }) => {
  return (
    <Container>
      {arrHistorySearch.length > 0 && (
        <Style>
          <p className="fw-bold">Search History:</p>
          {arrHistorySearch.map((item, idx) => {
            return (
              <HistoryItem
                onClick={() => onClick(item)}
                title={item}
                key={idx}
                onDelete={() => onDelete(item)}
              />
            );
          })}
        </Style>
      )}
    </Container>
  );
};

export default HistorySection;
