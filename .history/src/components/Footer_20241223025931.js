import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import logoImage from "../Assets/AIGINITE_SOLUTIONS_Transperent.png";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <Container fluid className="footer">
      {/* Top Section */}
      <Row className="top-footer">
        <Col md={3} className="contact-item logo-footer">
        <img src={logoImage} alt="Company Logo" style={{ width: "150px", margin: "-23px 14px 0 0" }} />
        </Col>
        <Col md={3} className="contact-item">
        <div>
        <i className="fas fa-envelope"></i>
        <a href="mailto:contactus@aiginite.com" className="highlight">
        ✉️ contactus@aiginite.com
        </a>
        <p>Online support</p>
      </div>
      
        </Col>
        <Col md={3} className="contact-item">
        <div>
        <i className="fas fa-map-marker-alt"></i>
        <span className="highlight" style={{ display: "block" }}>Business Incubation Centre</span>
        <span>
          PU, Lahore, <span className="highlight">Pakistan</span>
        </span>
      </div>
      
        </Col>
      </Row>

      {/* Bottom Section */}
      <Row className="bottom-footer">
        <Col md={3} className="text-left">
        <p className="footer-bottom-text">@ Copyright 2024 |Terms & Conditions| Privacy Policy</p>

        </Col>
        <Col md={3} className="text-right">
          <p>Created by: <span className="highlight">Aiginite Team</span></p>
        </Col>
        <Col md={3} className="social-icons-container">
          <p>Connect with us on social media</p>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a href="https://www.linkedin.com/company/aiginite-solutions-pvt" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://www.facebook.com/profile.php?id=61568810946910&mibextid=ZbWKwL" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                <AiFillFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://www.instagram.com/aiginitesolutions" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
