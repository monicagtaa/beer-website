import React from "react";
import "./App.scss";
import beers from "./data/beers.js";
import Menu from "./container/Menu/Menu";


const App = () => {
  const text = "Check out the brews we're pouring \n all-freakin'-yearlong"
  let newText = text.split('\n').map(i => {
    return <p>{i}</p>
});

  return (
    <>
      <header className="header">
        <h1>Beer Discovery</h1>
        <p className="header__msg">
        {newText}
      </p>
      </header>
     
      <div>
        <Menu beersArr={beers} />
      </div>
    </>
  );
};

export default App;
