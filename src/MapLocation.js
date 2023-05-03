import React from "react";
import { Col } from "react-bootstrap";

function MapLocation({ name, locations, url }) {
  function goToMap() {
    window.location.href = url;
  }

  return (
    <Col sm="12" md="3" className="location py-2" onClick={goToMap}>
      <b>{name}</b>
      <br />
      <small>{locations}</small>
    </Col>
  );
}

export default MapLocation;
