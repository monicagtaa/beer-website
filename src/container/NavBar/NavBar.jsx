import React, { useState } from "react";
import "./NavBar.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import BeerTile from "../../components/BeerTile/BeerTile";
import FiltersList from "../../components/FiltersList/FiltersList";

const NavBar = (props) => {
  const { searchTerm, handleInput, filtersArr, handleOnChange, checkedState } = props;

  // const filtersJSX = filters.map((filter, idFilter) => {
  //   return (
  //     <li key={idFilter}>
  //       <div className="filters-list-item">
  //         <div className="left-section">
  //           <input
  //             type="checkbox"
  //             id={`custom-checkbox-${idFilter}`}
  //             name={filter.text}
  //             value={filter.text}
  //             checked={checkedState[idFilter]}
  //             onChange={() => handleOnChange(idFilter)}
  //           />
  //           <label htmlFor={`custom-checkbox-${idFilter}`}>{filter.text}</label>
  //         </div>
  //       </div>
  //     </li>
  //   );
  // });

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
