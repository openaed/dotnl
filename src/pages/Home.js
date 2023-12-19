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
    async function doTheThing() {
      const locs = await GetMaps();
      setData(locs);
    }

    doTheThing();
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
            <Link to="https://github.com/openaed" target="_blank">
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
          <Col id="project">
            <h2>Het project</h2>
            <p>
              Het doel van OpenAED is om een overzicht te krijgen van alle AEDs
              in Nederland, op basis van OpenStreetMap data. <br />
              Het project is open-source, en de data is vrij beschikbaar.
            </p>
          </Col>
          <Col id="aed">
            <h2>Wat is een AED?</h2>
            <p>
              Een AED, ofwel <i>Automatische Externe Defibrillator</i>, is een
              apparaat dat wordt gebruikt om een elektrische schok toe te dienen
              aan het hart van een persoon met een hartstilstand. Ze spelen een
              belangrijke rol bij een reanimatie - alleen mét een AED is er kans
              op overleven.
            </p>
          </Col>
        </Row>
        <Row className="mt-3 p-0" id="maps">
          <h2>Kaarten</h2>
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
