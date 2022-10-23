import React from "react";
import "./App.scss";
import beers from "./data/beers.js";
import filters from "./data/filters.js";
// import Menu from "./container/Menu/Menu";
import MenuV2 from "./container/MenuV2/MenuV2";

const App = () => {
  const text = "Check out the brews we're pouring \n all-freakin'-yearlong"
  let newText = text.split('\n').map(i => {
    return <p>{i}</p>
});



  return (
    <>
      <header className="header">
        <h1>Punk-Api Beer Discovery</h1>
        <p className="header__msg">
        {newText}
      </p>
      </header>
     
      <div>
        <MenuV2 beersArr={beers} filters={filters} />
      </div>
    </>
  );
};

export default App;
