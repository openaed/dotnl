import React from "react";
import { Col } from "react-bootstrap";

function MapLocation({ name, locations, url }) {
  function goToMap() {
    window.location.href = url;
  }

  return (
    <Col className="location py-2 col-3" onClick={goToMap}>
      <b>{name}</b>
      <br />
      <small>{locations}</small>
    </Col>
  );
}

export default MapLocation;
