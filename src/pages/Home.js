import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import MapLocation from "../MapLocation";
import { Link } from "react-router-dom";
import GetMaps from "./Maps";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadMaps() {
      const locs = await GetMaps();
      setData(locs);
    }

    loadMaps();
  }, []);

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
            <h2>Het project</h2>
            <p>
              Het doel van OpenAED is om een overzicht te krijgen van alle AEDs
              in Nederland, op basis van OpenStreetMap data. <br />
              Het project is open-source, en de data is vrij beschikbaar.
            </p>
          </Col>
          <Col sm={12} md id="aed">
            <h2>Wat is een AED?</h2>
            <p>
              Een AED, ofwel <i>Automatische Externe Defibrillator</i>, is een
              apparaat dat wordt gebruikt om een elektrische schok toe te dienen
              aan het hart van een persoon met een hartstilstand. Deze apparaten
              spelen een belangrijke rol bij een reanimatie - alleen mét een AED
              is er kans op overleven.
            </p>
          </Col>
        </Row>
        <Row className="mt-3" id="help">
          <h2>Hoe kan ik meehelpen?</h2>
          <p>
            OpenAED gebruikt data van OpenStreetMap. Om bij te dragen aan
            OpenAED, lees je{" "}
            <Link
              to="https://wiki.openstreetmap.org/wiki/NL:Beginnershandleiding"
              target="__blank"
            >
              de instructies van OpenSreetMap
            </Link>
            . Het staat iedereen vrij om AED's toe te voegen aan de kaart, maar
            de regels van OpenStreetMap moeten wel gevolgd worden. Zo voeg je{" "}
            <i>alleen</i> een AED toe als je deze daadwerkelijk gezien hebt.
          </p>
        </Row>
        <Row className="mt-3" id="map">
          <iframe
            src="https://nederland.openaed.nl"
            title="De kaart"
            height="500px"
          />
        </Row>
        <Row className="mt-3 p-0" id="maps">
          <h2>Alle kaarten</h2>
          <Row sm={1} md={4} className="text-center gap-2">
            {data.map((map) => {
              return (
                <MapLocation
                  name={map.name}
                  locations={map.description}
                  url={map.url}
                  key={map.name}
                />
              );
            })}
          </Row>
        </Row>
      </Container>
    </>
  );
}

export default Home;
