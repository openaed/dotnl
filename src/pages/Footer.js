import Container from "react-bootstrap/Container";
import { EnvelopeAtFill, BoxArrowUpRight } from "react-bootstrap-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

import ptdklogo from "../ptdk.svg";

function Footer() {
  return (
    <Container className="bg-success mt-4 text-white w-100" fluid>
      <Container>
        <Row className="p-3">
          <Col sm={12} md={2}>
            <h2>OpenAED</h2>
            <ul className="list-unstyled">
              <li>
                <EnvelopeAtFill />
                &nbsp;
                <Link to="mailto:info@openaed.nl" target="_blank">
                  info@openaed.nl
                </Link>
              </li>
            </ul>

            <Link to="https://ptdk.nl" target="_blank" rel="noreferrer">
              <img
                src={ptdklogo}
                alt="potato donkey logo"
                class="ptdklogo-footer"
              />
            </Link>
          </Col>
          <Col sm={12} md>
            <h3>Handige links</h3>
            <ul className="list-unstyled">
              <li>
                <Link to="https://www.hartstichting.nl/">Hartstichting</Link>
                &nbsp;
                <BoxArrowUpRight />
                <br />
                <small className="ms-3 fst-italic">
                  Meer informatie over hartstilstanden, reanimatie en AEDs.
                </small>
              </li>
              <li>
                <Link to="https://www.rodekruis.nl/ehbo/ehbo-tips/reanimatie/">
                  Rode Kruis
                </Link>
                &nbsp;
                <BoxArrowUpRight />
                <br />
                <small className="ms-3 fst-italic">Leer reanimeren!</small>
              </li>
              <li>
                <Link to="https://www.hartslagnu.nl/">HartslagNu</Link>
                &nbsp;
                <BoxArrowUpRight />
                <br />
                <small className="ms-3 fst-italic">
                  Word vrijwilliger en red levens!
                </small>
              </li>
              <li>
                <Link to="https://www.buurtaed.nl/">BuurtAED</Link>
                &nbsp;
                <BoxArrowUpRight />
                <br />
                <small className="ms-3 fst-italic">
                  Vraag een AED aan voor jouw buurt!
                </small>
              </li>
            </ul>
          </Col>

          <Col sm={12} md>
            <h3>Meer</h3>
            <ul className="list-unstyled">
              <li>
                <Link to="/foute-aed">Foutieve AED gevonden</Link>
              </li>
              <li>
                <Link to="https://www.openstreetmap.org/">OpenStreetMap</Link>
                &nbsp;
                <BoxArrowUpRight />
              </li>
              <li>
                <Link to="https://discord.gg/openstreetmap">
                  OpenStreetMap Discord
                </Link>
                &nbsp;
                <BoxArrowUpRight />
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <small className="fst-italic">
            &copy; 2024 potato donkey - OpenAED is niet aansprakelijk voor
            onjuiste informatie, noch de eventuele gevolgen daarvan.
            <br />
            OpenAED is geen onderdeel van OpenStreetMap.
          </small>
        </Row>
      </Container>
    </Container>
  );
}

export default Footer;
