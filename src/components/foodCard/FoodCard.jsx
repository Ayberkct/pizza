import { useState } from "react";
import "./foodCard.css";

function FoodCard(props) {
  const { pizzaIcerik } = props;
  return (
    <div className='food-card-container'>
      <div className='food-card-section'>
        <img
          className='food-card-img'
          src='https://github.com/Ayberkct/pizza/blob/bd48203787ebb9271801b5c0cc4ac4fad6877118/Assets/Iteration-2-aseets/pictures/form-banner.png?raw=true'
          alt=''
        />
        <span>
          Anasayfa - <span>Sipariş Oluştur</span>{" "}
        </span>
        <div className='food-card'>
          <h2>{pizzaIcerik[0].isim}</h2>
          <div className='food-card-fiyat'>
            <p>{pizzaIcerik[0].fiyat} ₺</p>
            <div className='food-card-yorum'>
              {pizzaIcerik[0].degerlendirme}
            </div>
            <p className='food-card-acıklama'>{pizzaIcerik[0].acıklama}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
