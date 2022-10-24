import React from "react";
// import FilterItem from "../FilterItem/FilterItem"

const FiltersList = (props) => {
 const { filtersArr, handleOnChange, checkedState } = props;
  
 
 const filtersJSX = filtersArr.map((filter, idFilter) => {
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

  return <ul className="filters-list">{filtersJSX}</ul>;
};
export default FiltersList;
