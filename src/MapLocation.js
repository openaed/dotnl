import React from "react";
import { Col } from "react-bootstrap";

function MapLocation(name, locations, url) {
  function goToMap() {
    window.location.href = url;
  }

  let locs = locations.join(", ");
  return (
    <Col className="location py-2" onClick={goToMap}>
      <b>{name}</b>
      <br />
      <small>
        Plaats{locations.length > 1 ? "namen" : "naam"} {locs}
      </small>
    </Col>
  );
}

export default MapLocation;
