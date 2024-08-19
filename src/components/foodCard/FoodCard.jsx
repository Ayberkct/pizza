import { useState } from "react";
import "./foodCard.css";

function FoodCard() {
  const initialData = {
    isim: "Position Absolute Acı Pizza",
    id: 1,
    fiyat: 85.5,
    degerlendirme: "4.9       (200)",
    acıklama:
      "Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir. ",
  };
  const [pizzaIcerik, setPizzaIcerik] = useState(initialData);
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
          <h2>{pizzaIcerik.isim}</h2>
          <div className='food-card-fiyat'>
            <p>{pizzaIcerik.fiyat} ₺</p>
            <div className='food-card-yorum'>{pizzaIcerik.degerlendirme}</div>
            <p className='food-card-acıklama'>{pizzaIcerik.acıklama}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
