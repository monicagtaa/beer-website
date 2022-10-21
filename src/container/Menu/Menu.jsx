import React from "react";
import "./Menu.scss";
import BeerTile from "../../components/BeerTile/BeerTile";
import NavBar from "../NavBar/NavBar";

const Menu = (props) => {
  const { beersArr } = props;
  const url = "https://api.punkapi.com/v2/beers";

  // const [checked, setChecked] = useState(false);
  // const [filtersArr, updateFiltersArr] = useState(filters);
  // const [searchTerm, setSearchTerm] = useState("");

  // const filteredBeers = beersArr.filter((beer) => {
  // const beerTitleLower = beer.name.toLowerCase();
  //   return beerTitleLower.includes(searchTerm) && beer.image_url;
  // });
  // const updatedBeers = beersArr.filter((beer) => {
  //   const beerNameLower = beerArr.name.toLowerCase();
  //   console.log("first brewed",beerArr.first_brewed.substring(3,7));
  //   return beerNameLower.includes(searchTerm)
  //   && (filtersArr[0].checked ? beer.abv > 6: true )
  //   && (filtersArr[1].checked ? beer.first_brewed.substring(3,7) < 2010: true )
  //   && (filtersArr[2].checked ? beer.ph < 4: true );
  // });

  return (
    <>
      <div className="mainPage">
        
        <section>
        <NavBar beersArr={beersArr}/>
        </section>
      <section className="tiles">
      
        <div className="all-beers">
        <BeerTile  title="Beers Types" beersArr={beersArr}/>
        </div>
      </section>
      </div>
      </>
  );
};

export default Menu;
