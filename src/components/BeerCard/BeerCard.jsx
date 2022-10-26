import React from "react";
import "./BeerCard.scss";

const BeerCard = (props) => {
  const {
    card_image,
    card_tagline,
    card_name,
    card_firstbrew,
    card_description,
    card_id,
  } = props;

  let idFormat = "false";
  if (card_image.includes("keg") || card_image.includes("cask") ) {
    idFormat = "true";
  }



  return (
    <>
      <div className="beer-card" key={card_id}>
        <div className="beer-card__img">
          <img
            id ={`beer-card__img--${idFormat}`}
            src={card_image}
            alt={card_tagline}
          />
        </div>
        <h3 className="beer-card__heading">{card_name}</h3>
        <p className="beer-card__firstbrew">First Brewed: {card_firstbrew}</p>
        <p className="beer-card__desc">{card_description}</p>
      </div>
    </>
  );
};

export default BeerCard;
