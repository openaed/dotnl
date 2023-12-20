import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

function WrongAED() {
  return (
    <>
      <Row className="text-center bg-aed hero">
        <Col className="col-12 p-5 text-white hero-content">
          <h1>OpenAED.nl</h1>
          <h2>
            Kaarten van AEDs in Nederland, op basis van OpenStreetMap data.
          </h2>
          <span>
            <Link to="" target="_blank">
              GitHub
            </Link>
            |
            <Link to="https://openstreetmap.org" target="_blank">
              OpenStreetMap
            </Link>
          </span>
        </Col>
      </Row>
      <Container>
        <Row className="mt-3">
          <Col sm={12} md id="project">
            <h2>Ik heb een foutieve AED gevonden</h2>
            <p>
              Een foutieve AED gevonden? Dat is vervelend!
              <br />
              OpenAED haalt zijn data van OpenStreetMap. Om een foutieve AED van
              de kaart te halen, moet je deze verandering dan ook invoeren op
              OpenStreetMap. Dit kan je zelf doen, of je kan een zogeheten
              'note' aanmaken. Hiermee wijs je lokale vrijwilligers erop dat er
              iets veranderd moet worden aan de kaart.
            </p>
            <Row>
              <Col>
                <h3>Ik wil het zelf doen</h3>
                <p>
                  Top! Dat doe je als volgt:
                  <ol>
                    <li>
                      Selecteer de AED die je wilt aanpassen of verwijderen
                    </li>
                    <li>
                      Klik op de 'OpenStreetMap' link in het informatiekaartje
                    </li>
                    <li>
                      Klik links bovenin, naast het logo, op Edit
                      <br />
                      <small className="ms-2">
                        OpenStreetMap zal je vragen in te loggen. Dit kan met
                        Google, Facebook, en andere accounts. Het kan gebeuren
                        dat je na het inlogproces de AED die je wil aanpassen
                        opnieuw moet selecteren.
                      </small>
                    </li>
                    <li>
                      Je komt nu in de editor. Als het goed is, is de AED die je
                      wil aanpassen al geselecteerd.
                      <br />
                      In het linkervak staat de informatie die bekend is over
                      deze AED. Dit kan je aanpassen.
                    </li>
                    <li>
                      Als je de AED wilt verwijderen, druk je simpelweg op de
                      'Delete' knop op je toetsenbord. Ook kan je rechts klikken
                      op de AED in de editor, en dan 'Delete' selecteren.
                    </li>
                    <li>Tot slot, druk links bovenin op 'Save'</li>
                  </ol>
                </p>
              </Col>
              <Col>
                <h3>Laat iemand anders het maar doen</h3>
                <p>
                  Dat is ook goed.
                  <ol>
                    <li>
                      Selecteer de AED die je wilt laten aanpassen of
                      verwijderen
                    </li>
                    <li>
                      Klik op de 'OpenStreetMap' link in het informatiekaartje
                    </li>
                    <li>
                      Je komt nu op OpenStreetMap. Als het goed is, is je AED al
                      geselecteerd.
                    </li>
                    <li>
                      Klik aan de rechterkant op 'Add a note to the map' - dat
                      ziet eruit als een tekstwolkje met een plusteken.
                    </li>
                    <li>
                      Schrijf kort wat er mis is, zoals "Deze AED is
                      weggehaald", of "Deze AED is van een andere beheerder",
                      o.i.d.
                    </li>
                    <li>
                      Druk op 'Add Note'. Je note is nu toegevoegd aan de kaart.
                      Er zijn genoeg vrijwilligers actief op OpenStreetMap. Zij
                      gaan ervoor zorgen dat de informatie wordt bekeken en
                      geverifieerd. Als je dit makkelijker voor ze wilt maken,
                      kan je een (link naar) een <i>eigen</i> foto toevoegen aan
                      je note.
                    </li>
                  </ol>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default WrongAED;
