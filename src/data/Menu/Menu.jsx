import React from "react";
import "./Menu.scss";
import BeerTile from "../../components/BeerTile/BeerTile";
import NavBar from "../NavBar/NavBar";
import filters from "../../data/filters";

const Menu = (props) => {
  const { beersArr } = props;

  // const [searchTerm, setSearchTerm] = useState("");

  // const handleInput = (event) => {
  //   const cleanInput = event.target.value.toLowerCase();
  //   // console.log(cleanInput);
  //   setSearchTerm(cleanInput);
  // };

  // const filteredBeers = beersArr.filter((beer) => {
  //   const beerNameLower = beer.name.toLowerCase();
  //   console.log("first brewed",beer.first_brewed.substring(3,7));
  //   console.log(beer.description.length)
  //   return beerNameLower.includes(searchTerm) && beer.image_url;
  // });
 
  // console.log("UpdatedBeers=",filteredBeers);
  // console.log("updatedbeers[0]=",filteredBeers[0]);

  return (
    <>
      <div className="mainPage">
        {/* <section>
          <NavBar
            filters={filters}
            searchTerm={searchTerm}
            handleInput={handleInput}
            filteredBeers={filteredBeers}
          />
        </section> */}
        <section className="tiles">
          <div className="all-beers">
            <BeerTile title="Beers Types" beersArr={beersArr} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Menu;
