import React from "react";
import BeerCard from "../BeerCard/BeerCard";
import "./BeerTile.scss";

const BeerTile = (props) => {
  const { beersArr } = props;
 

  const beerListJSX = beersArr.map((beer) => (
    <BeerCard
      card_image={beer.image_url}
      card_tagline={beer.tagline}
      card_name={beer.name}
      card_description={beer.description}
      card_id={beer.id}
    />
  ));

  return (
    <>
      <div className="beer-list">{beerListJSX}</div>
    </>
  );
};

export default BeerTile;
