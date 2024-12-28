import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link as ScrollLink } from "react-scroll"; // Import react-scroll Link
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineAppstore,
  AiOutlineProject, // Make sure to import the correct icon for Projects
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
                to="home"
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

            {/* Add Projects Button here */}
            <Nav.Item>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={  1000}
                onClick={() => updateExpanded(false)}
              >
                <Nav.Link as="div">
                  <AiOutlineProject style={{ marginBottom: "2px" }} /> Projects
                </Nav.Link>
              </ScrollLink>
            </Nav.Item>

            <Nav.Item>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={1000}
                onClick={() => updateExpanded(false)}
              >
                <Nav.Link as="div">
                  <AiOutlineMail style={{ marginBottom: "2px" }} /> Contact
                </Nav.Link>
              </ScrollLink>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
