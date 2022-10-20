import React, { useState} from 'react'
import "./NavBar.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import BeerTile from "../../components/BeerTile/BeerTile";


const NavBar = (props) => {
  const { beersArr } = props;
  // const [checked, setChecked] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");


  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };
 
 
  const filteredBeers = beersArr.filter((beer) => {
    const beerTitleLower = beer.name.toLowerCase();

    return beerTitleLower.includes(searchTerm) && beer.image_url;
  });
console.log(filteredBeers)

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
          <label>
            <input type="checkbox" />
            {"High ABV (> 6.0%"}
          </label>
          <label>
            <input type="checkbox" />
            {"Classic Range"}
          </label>
          <label>
            <input type="checkbox" />
            {"Acidic (ph < 4)"}
          </label>
        </div>
      </div>
      {/* <BeerTile title={"Results"} beersArr={filteredBeers} /> */}
    </>
  );
}

export default NavBar