import React, { useState } from "react";
import "./NavBar.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import BeerTile from "../../components/BeerTile/BeerTile";
import FiltersList from "../../components/FiltersList/FiltersList";

const NavBar = (props) => {
  const { filters, searchTerm, handleInput, filteredBeers } = props;

  // const [searchTerm, setSearchTerm] = useState("");

  
  //https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/
  const [checkedState, setCheckedState] = useState(
    new Array(filters.length).fill(false) // how to remove JavaScript new Array()
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, idFilter) =>
      idFilter === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  // const handleInput = (event) => {
  //   const cleanInput = event.target.value.toLowerCase();
  //   setSearchTerm(cleanInput);
  // };

  // const filteredBeers = beersArr.filter((beer) => {
  //   const beerNameLower = beer.name.toLowerCase();
  //   return beerNameLower.includes(searchTerm) && beer.image_url;
  // });

  const filtersJSX = filters.map((filter, idFilter) => {
    return (
      <li key={idFilter}>
        <div className="filters-list-item">
          <div className="left-section">
            <input
              type="checkbox"
              id={`custom-checkbox-${idFilter}`}
              name={filter.text}
              value={filter.text}
              checked={checkedState[idFilter]}
              onChange={() => handleOnChange(idFilter)}
            />
            <label htmlFor={`custom-checkbox-${idFilter}`}>{filter.text}</label>
          </div>
        </div>
      </li>
    );
  });

  return (
    <>
      <div className="NavBar">
        <div className="NavBar__searchbox">
          <SearchBox
            label={"beers"}
            searchTerm={searchTerm}
            handleInput={handleInput}
          />
        </div>
        <ul className="filters-list">
          {filtersJSX}
        </ul>

        <BeerTile title={"Results"} beersArr={filteredBeers} />
      </div>
    </>
  );
};

export default NavBar;
