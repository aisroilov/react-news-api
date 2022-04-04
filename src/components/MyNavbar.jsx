import React, { useState } from "react";
import {
  Container,
  Nav,
  FormControl,
  Button,
  Navbar,
  InputGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavbar = (props) => {
  let searchText = "";
  const [linkSearchTerm, setLinkSearchTerm] = useState("");

  const SearchTermHandler = (event) => {
    setLinkSearchTerm(event.target.innerText);
    // console.log(event.target.innerText);
    props.handler(event.target.innerText);
  };

  const changeText = (q) => {
    searchText = q;
    // console.log(q);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setLinkSearchTerm(searchText);
      props.handler(searchText);
    }
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
              <Nav.Link onClick={SearchTermHandler}>Apple</Nav.Link>
              <Nav.Link onClick={SearchTermHandler}>Samsung</Nav.Link>
              <Nav.Link onClick={SearchTermHandler}>Asus</Nav.Link>
              <Nav.Link onClick={SearchTermHandler}>Realme</Nav.Link>
              <Nav.Link onClick={SearchTermHandler}>Canon</Nav.Link>
            </Nav>
            <InputGroup className="d-flex search-container">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => changeText(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <Button variant="outline-success">Search</Button>
            </InputGroup>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
