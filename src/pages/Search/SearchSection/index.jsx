import { Col, Container, Row } from "reactstrap";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../components/Button/index.jsx";
import Input from "../../../components/Input/index.jsx";
import Style from "./style.js";


const SearchSection = ({
  city,
  country,
  errorMessage,
  onSearch,
  setCity,
  setCountry
}) => {
  const onClearAll = () => {
    setCountry("");
    setCity("");
  };

  return (
    <Style>
      <div className="hero-container">
        <p className="title fw-bold text-center mb-5 mx-1">
        Explore forecasts worldwide, 
          <br />
          from cities to remote havens.
        </p>
          <Container>
            <Row>
              <Col className="col" xs="12" md="4"
            >
                <Input
                  value={country}
                  onChange={setCountry}
                  iconLeft={faEarthAmericas}
                  placeholder="Please input country"
                />
              </Col>
              <Col  className="col" xs="12" md="4">
                <Input
                  value={city}
                  onChange={setCity}
                  iconLeft={faCity}
                  placeholder="Please input city"
                />
              </Col>
              <Col  className="col" xs="12" md="2">
                <Button
                  disabled={country && city ? false : true}
                  onClick={onSearch}
                  type="primary"
                >
                  Search
                </Button>
              </Col>
              <Col  className="col" xs="12" md="2">
                <Button
                  type="secondary"
                  disabled={city || country ? false : true}
                  onClick={onClearAll}
                >
                  Clear all
                </Button>
              </Col>
            </Row>
            {errorMessage && (
          <p className="txt-hint">
            To make search more precise put the city's name, comma, 2-letter
            country code (ISO3166).
          </p>
        )}
          </Container>
      </div>
     </Style>
  );
};

export default SearchSection;
