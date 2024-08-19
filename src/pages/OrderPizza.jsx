import { useEffect } from "react";
import { useHistory } from "react-router-dom"; // useHistory'i ekleyin
import FoodCard from "../components/foodCard/foodCard";
import Header from "../components/header/Header";
import Footer from "../components/footer/footer";
import "./OrderPizza.css";
import { Form, FormGroup, Input, Label } from "reactstrap";

function OrderPizza(props) {
  const {
    setSecilenBoyut,
    setSecilenKalinlik,
    secilenMalzemeler,
    setSecilenMalzemeler,
    toplamFiyat,
    setToplamFiyat,
    adet,
    setAdet,
    pizzaIcerik,
  } = props;
  const history = useHistory();

  useEffect(() => {
    const malzemeFiyati = secilenMalzemeler.length * 5 * adet;
    const yeniToplam = malzemeFiyati;
    setToplamFiyat(yeniToplam);
  }, [secilenMalzemeler, adet]);

  const handleBoyutChange = (event) => {
    setSecilenBoyut(event.target.value);
  };

  const handleKalinlikChange = (event) => {
    setSecilenKalinlik(event.target.value);
  };

  const handleMalzemeChange = (event) => {
    const malzeme = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked && secilenMalzemeler.length < 10) {
      setSecilenMalzemeler([...secilenMalzemeler, malzeme]);
    } else if (!isChecked) {
      setSecilenMalzemeler(
        secilenMalzemeler.filter((item) => item !== malzeme)
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("./success");
  };

  return (
    <div>
      <Header />
      <FoodCard pizzaIcerik={pizzaIcerik} />
      <div className='food-size-container'>
        <div className='size-dough-container'>
          <div className='size-selection'>
            <p>
              Boyut Seç <span style={{ color: "red" }}>*</span>
            </p>
            <Form className='food-size'>
              <FormGroup check inline>
                <Input
                  type='radio'
                  id='radio-s'
                  name='size'
                  value='S'
                  onChange={handleBoyutChange}
                />
                <Label className='radio' for='radio-s'>
                  S
                </Label>
              </FormGroup>

              <FormGroup check inline>
                <Input
                  type='radio'
                  id='radio-m'
                  name='size'
                  value='M'
                  onChange={handleBoyutChange}
                />
                <Label className='radio' for='radio-m'>
                  M
                </Label>
              </FormGroup>

              <FormGroup check inline>
                <Input
                  type='radio'
                  id='radio-l'
                  name='size'
                  value='L'
                  onChange={handleBoyutChange}
                />
                <Label className='radio' for='radio-l'>
                  L
                </Label>
              </FormGroup>
            </Form>
          </div>

          <div className='dough-selection'>
            <p>
              Hamur Seç <span style={{ color: "red" }}>*</span>
            </p>
            <Form>
              <FormGroup>
                <Input
                  type='select'
                  id='hamur-kal'
                  placeholder='--Hamur Kalınlığı Seçin--'
                  onChange={handleKalinlikChange}
                >
                  <option value=''>--Hamur Kalınlığı Seçin--</option>
                  <option value='ince'>İnce</option>
                  <option value='orta'>Orta</option>
                  <option value='kalin'>Kalın</option>
                </Input>
              </FormGroup>
            </Form>
          </div>
        </div>

        <div>
          <Form className='checkbox-container'>
            <p>
              <span style={{ fontWeight: "bold" }}>Ek Malzemeler</span>
            </p>
            <p>En Fazla 10 malzeme seç</p>

            {[
              "Pepperoni",
              "Tavuk Izgara",
              "Mısır",
              "Sarımsak",
              "Ananas",
              "Sosis",
              "Soğan",
              "Sucuk",
              "Biber",
              "Kabak",
              "Kanada Jambonu",
              "Domates",
              "Jalepeno",
              "Sucuk",
            ].map((malzeme, index) => (
              <FormGroup check key={index}>
                <Input
                  type='checkbox'
                  id={`checkbox${index + 1}`}
                  value={malzeme}
                  onChange={handleMalzemeChange}
                  disabled={
                    !secilenMalzemeler.includes(malzeme) &&
                    secilenMalzemeler.length >= 10
                  }
                />
                <Label className='checkbox' for={`checkbox${index + 1}`}>
                  {malzeme}
                </Label>
              </FormGroup>
            ))}
          </Form>
          <div className='siparis-notu'>
            <Form>
              <Label for='siparis-notu-input'>Sipariş Notu</Label>
              <Input
                id='siparis-notu-input'
                type='textarea'
                placeholder='Siparişinize eklemek istediğiniz bir not var mı?'
              />
            </Form>
          </div>
        </div>
      </div>
      <div className='fiyat-hesaplama'>
        <div className='adet-kontrol'>
          <div
            className='azalt-buton'
            onClick={() => setAdet(adet > 1 ? adet - 1 : 1)}
          >
            -
          </div>
          <span className='adet'>{adet}</span>
          <div className='arttir-buton' onClick={() => setAdet(adet + 1)}>
            +
          </div>
        </div>
        <div className='siparis-toplami'>
          <h3>Sipariş Toplamı</h3>
          <div className='secimler'>
            <p>Seçimler {toplamFiyat} ₺</p>
          </div>
          <p className='toplam-fiyat'>Toplam Fiyat: {toplamFiyat} ₺</p>
          <div className='siparis-ver-buton' onClick={handleSubmit}>
            {" "}
            SİPARİŞ VER{" "}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OrderPizza;
