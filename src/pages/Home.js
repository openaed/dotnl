import React from "react";
import { Row, Col } from "react-bootstrap";
import MapLocation from "../MapLocation";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import GetMaps from "./Maps";

const locs = GetMaps();

let MapLocations = [];

locs.forEach((loc) => {
  MapLocations.push(MapLocation(loc.name, loc.locations, loc.url));
});

function Home() {
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
          <h2>Plaatsen</h2>
          <Row className="row-cols-md-4 row-cols-1 text-center gap-2">
            {MapLocations}
          </Row>
        </Row>
      </Container>
    </>
  );
}

export default Home;
