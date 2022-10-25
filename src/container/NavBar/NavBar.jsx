import React, { useState } from "react";
import "./NavBar.scss";
import SearchBox from "../../components/SearchBox/SearchBox";

import FiltersList from "../../components/FiltersList/FiltersList";

const NavBar = (props) => {
  const { searchTerm, handleInput, filtersArr, handleOnChange, checkedState } = props;

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
          <FiltersList
            filtersArr={filtersArr}
            handleOnChange={handleOnChange}
            checkedState= {checkedState}
          />
        </ul>
      </div>
    </>
  );
};

export default NavBar;
