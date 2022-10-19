import React from 'react'
import "./BeerTile.scss";

const BeerTile = (props) => {
  const { beersArr } = props;

  const beerListJSX = beersArr.map((beer, index) => (
    <div className="beer-tile" key={index + 1}>
      <img className="beer-tile__img" src={beer.image_url} alt={beer.tagline} />
      <h3 className="beer-title__heading">{beer.name}</h3>
      <p className="beer-tile__content">{beer.description}</p>
    </div>
  ));

  return (
    <>
      <div className="beer-list" >
        {beerListJSX}
        </div>
    </>
  );
};

export default BeerTile