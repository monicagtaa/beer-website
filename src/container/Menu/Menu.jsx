import React, {useState} from "react";
import "./Menu.scss";
import BeerTile from "../../components/BeerTile/BeerTile";
import NavBar from "../NavBar/NavBar";


const Menu = (props) => {
  const { beersArr, filters} = props;

  const [searchTerm, setSearchTerm] = useState("");
  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

 //https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/
  /////////////////////////////////////////////////////
  const [checkedState, setCheckedState] = useState(
    new Array(filters.length).fill(false) // how to change JavaScript new Array()
  );
  
  const [filtersArr, updateFiltersArr] = useState(filters);

  const handleOnChange = (position) => {
    console.log("HandleOnChange", filtersArr)
    const newFiltersArr = filtersArr.map((filter, idFilter) =>
    idFilter === position ? { ...filter, checked: !filter.checked } : { ...filter }
    );
    // console.log(position)
    // console.log(newFiltersArr)
    const updatedCheckedState = checkedState.map((item, idFilter) =>
      idFilter === position ? !item : item
    );
    console.log("updatedCheckedState", checkedState)
    updateFiltersArr(newFiltersArr);
    console.log("After HandleOnChange", filtersArr)
    setCheckedState(updatedCheckedState)
    console.log("After updatedCheckedState", checkedState)
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

  return (
    <>
      <div className="mainPage">
        <section>
          <NavBar
             searchTerm={searchTerm}
             handleInput={handleInput}
             filtersArr={filtersArr}
             handleOnChange={handleOnChange}
             checkedState= {checkedState}
          />
        </section>
        <section className="tiles">
          <div className="all-beers">
            <BeerTile title="Beers Types" beersArr={filteredBeers} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Menu;
