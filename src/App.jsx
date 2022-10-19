import React from 'react'
import './App.scss';
import beers from "./data/beers.js"; 
import Menu from "./container/Menu/Menu";
import NavBar from "./container/NavBar/NavBar"




const App = () => {
  return (
    <>
    <div>
    <section className="mainPage">
    <NavBar beersArr={beers}/>
    <Menu beersArr={beers} />
    
    </section>
    </div>
    </>
  )
}

export default App



