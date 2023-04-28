import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  return (
    <Navbar bg="success" expand="lg" className="navbar-fixed-top">
      <Container>
        <Navbar.Brand href="/" className="text-white fw-bold">
          OpenAED.nl
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Navigation;
