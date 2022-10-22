import React, { useState } from "react";
import "./NavBar.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import BeerTile from "../../components/BeerTile/BeerTile";

const NavBar = (props) => {
  const { beersArr, filterConditions } = props;

  //Controlled Input is managed by check useState
  //https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/
 
  const [checkedState, setCheckedState] = useState(
    new Array(filterConditions.length).fill(false)
);

  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    console.log(cleanInput);
    setSearchTerm(cleanInput);
  };

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, id) =>
      id === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
    
//{isChecked ? "checked" : "un-checked"}
  const filteredBeers = beersArr.filter((beer) => {
    const beerTitleLower = beer.name.toLowerCase();
    return beerTitleLower.includes(searchTerm) && beer.image_url;
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
        <div className="NavBar__checkedbox">
          <label className="NavBar__boxLabel">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleOnChange}
            />
            {"High ABV (> 6.0%"}
          </label>
          <label className="NavBar__boxLabel">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleOnChange}
            />
            {"Classic Range"}
          </label>
          <label className="NavBar__boxLabel">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleOnChange}
            />
            {"Acidic (ph < 4)"}
          </label>
          {handleOnChange}
        </div>
       
        <div className="search-result">
          <BeerTile beersArr={filteredBeers} />
        </div>
      </div>
      {/* <BeerTile title={"Results"} beersArr={filteredBeers} /> */}
    </>
  );
};

export default NavBar;
