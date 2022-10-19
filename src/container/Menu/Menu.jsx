import React from "react";
import "./Menu.scss"
import BeerTile from "../../components/BeerTile/BeerTile";

const Menu = (props) => {
  const { beersArr } = props;



  return (
   <>
      <div className="menu">
        <header className="header">
          <h1>Beer Discovery</h1>
        </header>
    
       
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
