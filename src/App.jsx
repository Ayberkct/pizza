import { Route, Switch, Link } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./pages/Home";
import OrderPizza from "./pages/OrderPizza";
import Succes from "./pages/Succes";
import { useState } from "react";

function App() {
  const initialData = [
    {
      isim: "Position Absolute Acı Pizza",
      id: 1,
      fiyat: 85.5,
      degerlendirme: "4.9       (200)",
      acıklama:
        "Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir. ",
    },
    {
      isim: "Terminal Pizza",
      id: 2,
      fiyat: 60,
      degerlendirme: "4.9       (200)",
      acıklama: "Mükemmel Lezzet ",
    },
    {
      isim: "useEfect Tavuklu Burger",
      id: 4,
      fiyat: 60,
      degerlendirme: "4.9       (200)",
      acıklama: "Mükemmel Burger ",
    },
  ];
  const [pizzaIcerik, setPizzaIcerik] = useState(initialData);
  const [secilenBoyut, setSecilenBoyut] = useState("");
  const [secilenKalinlik, setSecilenKalinlik] = useState("");
  const [secilenMalzemeler, setSecilenMalzemeler] = useState([]);
  const [toplamFiyat, setToplamFiyat] = useState(0);
  const [adet, setAdet] = useState(1);

  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/orderPizza'>
          <OrderPizza
            secilenBoyut={secilenBoyut}
            setSecilenBoyut={setSecilenBoyut}
            secilenKalinlik={secilenKalinlik}
            setSecilenKalinlik={setSecilenKalinlik}
            secilenMalzemeler={secilenMalzemeler}
            setSecilenMalzemeler={setSecilenMalzemeler}
            toplamFiyat={toplamFiyat}
            setToplamFiyat={setToplamFiyat}
            adet={adet}
            setAdet={setAdet}
            pizzaIcerik={pizzaIcerik}
          />
        </Route>
        <Route path='/succes'>
          <Succes
            secilenBoyut={secilenBoyut}
            secilenKalinlik={secilenKalinlik}
            secilenMalzemeler={secilenMalzemeler}
            toplamFiyat={toplamFiyat}
            adet={adet}
          />
        </Route>
      </Switch>
      <Link to='/'>Home</Link>
      <Link to='/orderPizza'>OrderPizza</Link>
      <Link to='/succes'>Succes</Link>
    </>
  );
}

export default App;
