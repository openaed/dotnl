import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import ptdklogo from "../ptdk.svg";

function Navigation() {
  return (
    <Navbar bg="success" expand="lg" className="navbar-fixed-top">
      <Container>
        <Navbar.Brand href="/" className="text-white fw-bold">
          OpenAED.nl
        </Navbar.Brand>

        <a
          href="https://ptdk.nl"
          target="_blank"
          class="text-white td-none"
          rel="noreferrer"
        >
          mogelijk gemaakt door&nbsp;
          <img src={ptdklogo} alt="potato donkey logo" class="ptdklogo" />
        </a>
      </Container>
    </Navbar>
  );
}

export default Navigation;
