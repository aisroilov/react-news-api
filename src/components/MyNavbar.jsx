import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  NavDropdown,
  FormControl,
  Button,
  Navbar,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavbar = (props) => {
  const [linkSearchTerm, setLinkSearchTerm] = useState("");

  const SearchTermHandler = (event) => {
    setLinkSearchTerm(event.target.innerText);
    console.log(event.target.innerText);
    props.handler(event.target.innerText);
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">News</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link onClick={SearchTermHandler}>Tesla</Nav.Link>
              <Nav.Link href="#action1">Apple</Nav.Link>
              <Nav.Link href="#action2">Samsung</Nav.Link>
              <Nav.Link href="#action3">Asus</Nav.Link>
              <Nav.Link href="#action4">Realme</Nav.Link>
              <Nav.Link href="#action5">Canon</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
