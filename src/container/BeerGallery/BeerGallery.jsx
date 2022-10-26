import React from 'react';
import BeerTile from '../../components/BeerTile/BeerTile';
import "./BeerGallery.scss"

const beerGallery = (props) => {
  const { beersArr } = props;

  const imagesArr = beersArr.map((beer) => beer.image_url);
  console.log(imagesArr);

  return (
    <section className='beer-gallery'>
      <div className='beer-gallery__tile'>
        <BeerTile imagesArr={imagesArr}/>
      </div>
    </section>
  );
};

export default beerGallery;