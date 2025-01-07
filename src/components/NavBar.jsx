import { useMemo } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./NavBar.css";

const NavBar = ({ cart }) => {
  let CompraTotal = 25000;
  CompraTotal = CompraTotal.toLocaleString();
  const token = false;

  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#">¡Pizzería Mamma Mia!</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">🍕Home</Nav.Link>
              <Nav.Link
                className={token === false ? "nologin" : null}
                href="#action2"
              >
                🔓Profile
              </Nav.Link>
              <Nav.Link
                className={token === false ? "nologin" : null}
                href="#action2"
              >
                🔒Logout
              </Nav.Link>
              <Nav.Link
                className={token === true ? "nologin" : null}
                href="#action2"
              >
                🔐Login
              </Nav.Link>
              <Nav.Link
                className={token === true ? "nologin" : null}
                href="#action2"
              >
                🔐Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Button variant="outline-light">🛒Total : {CompraTotal}</Button>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
