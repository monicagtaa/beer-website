import React from "react";
import "./App.scss";
// import beers from "./data/beers.js";
import filters from "./data/filters.js";
import Menu from "./container/Menu/Menu";
// import MenuV2 from "./container/MenuV2/MenuV2";
import { useEffect, useState } from "react"; 
import Nav from "./components/Nav/Nav"


const App = () => {
  const text = "Check out the brews we're pouring \n all-freakin'-yearlong"
  let newText = text.split('\n').map(i => {
    return <p>{i}</p>
});
const message = "Don’t feel bad. We’re no strangers to the occasional typo. \n Maybe try again?"
  let newMessage = message.split('\n').map(i => {
    return <p>{i}</p>
});

// Nav
const handleSubmit = (event) => {
  console.log(event);
};

//////// API ////////////////////////////////////
const [beers, setBeers] = useState([]);

const url = "https://api.punkapi.com/v2/beers?page=2&per_page=80";
let num=2
console.log("https://api.punkapi.com/v2/beers?page="+num+"&per_page=80");

const getBeers = async () => { // in this function add async before parenthesis
  fetch (url)
  .then((response) => response.json())
  .then((data) => setBeers(data))
  .catch((error) => console.log("error=",error));
}

useEffect(() => {
  getBeers();
}, [])
/////////////////////////////////////////////


  return (
    <>
    <body>
      <Nav handleSubmit={handleSubmit}/>
      <header className="header">
        <h1 className="header__title">Punk-Api Beer Discovery</h1>
        <p className="header__msg">
        {newText}
      </p>
      </header>
     
      <div>
        <Menu beersArr={beers} filters={filters} emptySearchMessage= {newMessage}/>
      </div>
      </body>
    </>
  );
};

export default App;
