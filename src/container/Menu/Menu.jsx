import React from "react";
import "./Menu.scss"
import BeerTile from "../../components/BeerTile/BeerTile";
import NavBar from "../NavBar/NavBar"

const Menu = (props) => {
  const { beersArr } = props;



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
