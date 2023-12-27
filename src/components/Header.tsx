import '../assets/css/Header.css';
import Container from './Container';

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="header__container">
          <p className="header__text">Apex Legends Info</p>
        </div>
      </Container>
    </header>
  );
};

export default Header;
