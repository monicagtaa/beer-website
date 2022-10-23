import React, { useState } from "react";
import "./NavBarV2.scss"
import SearchBox from "../../components/SearchBox/SearchBox";
import BeerTile from "../../components/BeerTile/BeerTile";
import FiltersList from "../../components/FiltersList/FiltersList";

const NavBar = (props) => {
  const {beersArr, filters} = props;

  const [searchTerm, setSearchTerm] = useState("");
  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };
  
  //https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/
  /////////////////////////////////////////////////////
  const [checkedState, setCheckedState] = useState(
    new Array(filters.length).fill(false) // how to remove JavaScript new Array()
  );
  const [filtersArr, updateFiltersArr] = useState(filters);
  const handelOnChange = (position) => {
    const newFiltersArr = filtersArr.map((filter, idFilter) =>
    idFilter === position ? { ...filter, checked: !filter.checked } : { ...filter }
    );
    const updatedCheckedState = checkedState.map((item, idFilter) =>
      idFilter === position ? !item : item
    );
    updateFiltersArr(newFiltersArr);
    setCheckedState(updatedCheckedState)
  };
/////////////////////////////////////////////////////
  

  const filteredBeers = beersArr.filter((beer) => {
    const beerNameLower = beer.name.toLowerCase();
    return beerNameLower.includes(searchTerm)
    && (filtersArr[0].checked ? beer.abv > 6: true )
    && (filtersArr[1].checked ? beer.first_brewed.substring(3,7) < 2010: true )
    && (filtersArr[2].checked ? beer.ph < 4: true )
    && beer.image_url;
  });

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
              onChange={() => handelOnChange(idFilter)}
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