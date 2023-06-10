import React, { useState } from "react";
import "./SearchBox.css";
import { fetchBySearch } from "../../api/fetchData";

const SearchBox = ({ setSearched }) => {
  const [searchLine, setSearchLine] = useState("");

  // change value of searchLine on every change of search input
  const searchLineHandler = (e) => setSearchLine(e.target.value);

  // submit handler for search button
  const onSearchBtnClick = (e) => {
    e.preventDefault();
    // fetch searched films, then store them into searched state in MainPage
    fetchBySearch(searchLine).then((data) => setSearched(data.Search));
  };

  return (
    <div className="search-box">
      <form className="search-box__form" onSubmit={onSearchBtnClick}>
        <label className="search-box__form-label">
          Искать фильм по названию:
          <input
            value={searchLine}
            type="text"
            className="search-box__form-input"
            placeholder="Например, Shawshank Redemption"
            onChange={searchLineHandler}
          />
        </label>
        <button
          type="submit"
          className="search-box__form-submit"
          disabled={!searchLine}
        >
          Искать
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
