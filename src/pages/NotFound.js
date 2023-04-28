import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

function Home() {
  return (
    <>
      <Container className="pt-5">
        <h1>Oei.</h1>
        <h2>Die pagina konden we niet vinden.</h2>
        <br />
        <Link to="/">Terug naar de homepage</Link>
      </Container>
    </>
  );
}

export default Home;
