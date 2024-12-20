import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link as ScrollLink } from "react-scroll"; // Import react-scroll Link
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineAppstore, // Import the Services icon
} from "react-icons/ai";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <span className="text-logo">AIginite.</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <ScrollLink
                to="home" // The ID of the section you want to scroll to
                smooth={true}
                duration={1000}
                onClick={() => updateExpanded(false)}
              >
                <Nav.Link as="div">
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </Nav.Link>
              </ScrollLink>
            </Nav.Item>

            <Nav.Item>
              <ScrollLink
                to="about"
                smooth={true}
                duration={1000}
                onClick={() => updateExpanded(false)}
              >
                <Nav.Link as="div">
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                </Nav.Link>
              </ScrollLink>
            </Nav.Item>

            <Nav.Item>
              <ScrollLink
                to="services"
                smooth={true}
                duration={1000}
                onClick={() => updateExpanded(false)}
              >
                <Nav.Link as="div">
                  <AiOutlineAppstore style={{ marginBottom: "2px" }} /> Services
                </Nav.Link>
              </ScrollLink>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={ScrollLink} to="contact" smooth={true} duration={1000}>
                <AiOutlineMail style={{ marginBottom: "2px" }} /> Contact
              </Nav.Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
