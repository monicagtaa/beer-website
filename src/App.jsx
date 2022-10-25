import React from "react";
import "./App.scss";
// import beers from "./data/beers.js";
import filters from "./data/filters.js";
import Menu from "./container/Menu/Menu";
// import MenuV2 from "./container/MenuV2/MenuV2";
import { useEffect, useState } from "react"; 

const App = () => {
  const text = "Check out the brews we're pouring \n all-freakin'-yearlong"
  let newText = text.split('\n').map(i => {
    return <p>{i}</p>
});

///////////////////////////////////// API ///////
const [beers, setBeers] = useState([]);
const url = "https://api.punkapi.com/v2/beers?page=2&per_page=80";
useEffect(() => {
  getBeers();
}, [])
const getBeers = async () => { // in this function add async before parenthesis
  fetch (url)
  .then((response) => response.json())
  .then((data) => setBeers(data))
  .catch((error) => console.log("error=",error));
}
/////////////////////////////////


  return (
    <>
    <body>
      <header className="header">
        <h1 className="header__title">Punk-Api Beer Discovery</h1>
        <p className="header__msg">
        {newText}
      </p>
      </header>
     
      <div>
        <Menu beersArr={beers} filters={filters} />
      </div>
      </body>
    </>
  );
};

export default App;
