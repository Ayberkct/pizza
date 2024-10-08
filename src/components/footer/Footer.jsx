import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterBody = styled.footer`
  background: black;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  border-bottom: 2px solid white;
`;

const MenuSection = styled.div`
  color: white;
  max-width: 1092px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  h2,
  h3 {
    margin-bottom: 10px;
  }

  p {
    margin: 5px 0;
  }

  .info-item {
    display: flex;
    align-items: center;
    margin-top: 10px;

    img {
      margin-right: 10px;
    }

    span {
      margin: 0;
    }
  }

  .instagram-images {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;
    max-width: 347px;
    margin: 0 auto;

    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
    }
  }
`;

const FooterText = styled.div`
  background: black;
  color: white;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  i {
    color: white;
    font-size: 24px; /* Adjust icon size */
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBody>
        <MenuSection>
          <div>
            <img
              src='..//Assets/Iteration-2-aseets/footer/logo-footer.svg'
              alt=''
            />
            <div className='info-item'>
              <img
                src='https://github.com/Ayberkct/pizza/blob/main/Assets/Iteration-2-aseets/footer/icons/icon-1.png?raw=true'
                alt='Location Icon'
              />
              <span>341 Londonderry Road, Istanbul Türkiye</span>
            </div>
            <div className='info-item'>
              <img
                src='https://github.com/Ayberkct/pizza/blob/main/Assets/Iteration-2-aseets/footer/icons/icon-2.png?raw=true'
                alt='Email Icon'
              />
              <span>aciktim@teknolojikyemekler.com</span>
            </div>
            <div className='info-item'>
              <img
                src='https://github.com/Ayberkct/pizza/blob/main/Assets/Iteration-2-aseets/footer/icons/icon-3.png?raw=true'
                alt='Phone Icon'
              />
              <span>+90 216 123 45 67</span>
            </div>
          </div>

          <div>
            <h3>HOT MENU</h3>
            <p>Terminal Pizza</p>
            <p>5 Kişilik Hackathlon Pizza</p>
            <p>useEffect Tavuklu Pizza</p>
            <p>Beyaz Console Frosty</p>
            <p>Testler Geçti Mutlu Burger</p>
            <p>Position Absolute Acı Burger</p>
          </div>

          <div>
            <h3>INSTAGRAM</h3>
            <div className='instagram-images'>
              <img
                src='https://github.com/Ayberkct/pizza/blob/main/Assets/Iteration-2-aseets/footer/insta/li-0.png?raw=true'
                alt='Instagram Image 1'
              />
              <img
                src='https://github.com/Ayberkct/pizza/blob/main/Assets/Iteration-2-aseets/footer/insta/li-1.png?raw=true'
                alt='Instagram Image 2'
              />
              <img
                src='https://github.com/Ayberkct/pizza/blob/main/Assets/Iteration-2-aseets/footer/insta/li-2.png?raw=true'
                alt='Instagram Image 3'
              />
              <img
                src='https://github.com/Ayberkct/pizza/blob/main/Assets/Iteration-2-aseets/footer/insta/li-3.png?raw=true'
                alt='Instagram Image 4'
              />
              <img
                src='https://github.com/Ayberkct/pizza/blob/main/Assets/Iteration-2-aseets/footer/insta/li-4.png?raw=true'
                alt='Instagram Image 5'
              />
              <img
                src='https://github.com/Ayberkct/pizza/blob/main/Assets/Iteration-2-aseets/footer/insta/li-5.png?raw=true'
                alt='Instagram Image 6'
              />
            </div>
          </div>
        </MenuSection>
      </FooterBody>
      <FooterText>
        <span>2023</span>
        <i className='fa-brands fa-square-twitter'></i>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
