import Style from "./style.js";
import HistorySection from "./HistorySection/index.jsx";
import SearchSection from "./SearchSection/index.jsx";
import ResultSection from "./ResultSection/index.jsx";
import { useSearchController } from "./useSearchController.js";

const SearchPage = () => {
  const {
    arrHistorySearch,
    city,
    country,
    errorMessage,
    weather,
    onClickHistoryItem,
    onSearch,
    onDeleteHistoryItem,
    setCity,
    setCountry,
  } = useSearchController();

  return (
    <Style>
      <div className="search-page">
        <SearchSection
          city={city}
          country={country}
          errorMessage={errorMessage}
          onSearch={() => onSearch(city, country)}
          setCity={setCity}
          setCountry={setCountry}
        />

        <ResultSection weather={weather} errorMessage={errorMessage} />
        <HistorySection
          arrHistorySearch={arrHistorySearch}
          onClick={onClickHistoryItem}
          onDelete={onDeleteHistoryItem}
        />
      </div>
    </Style>
  );
};

export default SearchPage;
