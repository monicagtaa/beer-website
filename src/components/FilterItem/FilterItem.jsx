import React from 'react'

const FilterItem = (props) => {
    const { name, handleOnChange, idFilter } = props;
    // console.log("filterID in Filter=",filterId)

  return (
    <li key={idFilter}>
    <div className="filters-list-item">
      <div className="left-section">
        <input
          type="checkbox"
          idFilter={`custom-checkbox-${idFilter}`}
          name={name}
          value={name}
          checked={checkedState[idFilter]}
          onChange={() => handleOnChange(idFilter)}
        />
        <label htmlFor={`custom-checkbox-${idFilter}`}>{name}</label>
      </div>
    </div>
  </li>

  )
}

export default FilterItem;