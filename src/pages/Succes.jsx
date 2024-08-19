import Footer from "../components/footer/footer";
import Header from "../components/header/Header";

function Succes(props) {
  const { setSecilenBoyut, secilenMalzemeler, toplamFiyat, adet } = props;
  return (
    <div>
      <Header />
      Succes
      <Footer />
    </div>
  );
}

export default Succes;
