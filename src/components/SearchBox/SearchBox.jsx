import React from 'react'
import './SearchBox.scss'

const SearchBox = (props) => {
  const { label, searchTerm, handleInput } = props;

  const capitalizedLabel = label[0].toUpperCase() + label.slice(1);

  return (
    <form className="search-box">
      <label htmlFor={label} className="search-box__label">
      </label>
      <input
      className="search-box__input"
        type="text"
        name={label}
        value={searchTerm}
        onInput={handleInput}
      />
    </form>
  );
};

export default SearchBox;