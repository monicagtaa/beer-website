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

// const url = "https://api.punkapi.com/v2/beers/";
// const [beers, setBeers] = useState([]);

// //////////////////////////////////
// const [profiles, setProfiles] = useState([]);

// useEffect(()=>{
//   getUsersGender();
// },[selected]);

// const getUsers = async () => {
//   const res = await fetch(url);
//   const data = await res.json();
//   // clean the data!
//   const newBeers = data.results.map((beers) => cleanProfile(beers));
//   setBeers(newBeers);
// }
// const cleanProfile = (profile) => {
//   return {
//     name: profile.name.first +" " +profile.name.last,
//     email: profile.email,
//     phoneNumber: profile.phone,
//     image: profile.picture.large
//   }
// }
// const onChange =(event)=>{
//   console.log(event.target.value);
//   setGender(event.target.value);
// }

// const getUsersGender = async () => {
//   let res=await fetch(`${url}${selected}`);
//   const data = await res.json();
//   // clean the data!
//   const newProfiles = data.results.map((profile) => cleanProfile(profile));
  
/////////////////////////////////////

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
