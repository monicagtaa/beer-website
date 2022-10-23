import React from "react";
import "./MenuV2.scss";
import BeerTile from "../../components/BeerTile/BeerTile";
import NavBarV2 from "../NavBarV2/NavBarV2";
// import filters from "../../data/filters";

const MenuV2 = (props) => {
  const { beersArr, filters} = props;


  return (
    <>
      <div className="mainPage">
        <section>
          <NavBarV2
            filters={filters}
            beersArr={beersArr}
          />
        </section>
        <section className="tiles">
          <div className="all-beers">
            <BeerTile title="Beers Types" beersArr={beersArr} />
          </div>
        </section>
      </div>
    </>
  );
};

export default MenuV2;
