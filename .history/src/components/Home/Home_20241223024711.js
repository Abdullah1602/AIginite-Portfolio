import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import abImage from "../../Assets/AB.png"; // CEO and Co-Founder image



import {
  AiOutlineBarChart,
  AiOutlineCloud,
  AiOutlineCluster,
  AiOutlineDatabase,
  AiOutlineLineChart,
  AiOutlineRobot,
} from "react-icons/ai";

function Home() {
  return (
    <section className="my-section">
      {/* Hero Section */}
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 10 }} className="heading">
                <span className="highlight"> You Envision, We{" "}
                  Build</span>
              </h1>

              <h1 className="heading-name">
                Our mission is to empower businesses by crafting
                scalable and intelligent systems{" "} that drive growth and success in a dynamic digital world.
              </h1>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* About Us Section */}
      <section id="about" className="about">
        <h1 className="heading">
          <span className="highlight">About Us</span>
        </h1>
        <div className="row">
          <div className="content">
            <h3>
              Empowering Your Vision with Cutting-Edge Technology
            </h3>
            <p>
              We specialize in AI, Data Engineering, Full-Stack Development, and Data Analysis, creating
              innovative and scalable solutions. Partner with us to streamline operations, solve challenges,
              and unlock growth in a dynamic digital landscape.
            </p>

            <p>
              At AIginite Solutions, we are a team of innovators and problem-solvers dedicated to empowering businesses.
              We craft intelligent solutions that bridge technology and business, driving growth and transformation.
              Our mission is to help organizations thrive, adapt, and lead in an ever-evolving digital landscape.
            </p>

            <a
              href="https://forms.fillout.com/t/ihGyAo5rCPus"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Let’s Build Together
            </a>

          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="services">
        <h1 className="heading">
          <span className="highlight">Our Services</span>
        </h1>
        <h3>
          Comprehensive Solutions Tailored for Your Success
        </h3>
        <Row style={{ justifyContent: "center", padding: "20px" }}>
          <Col xs={12} md={6} lg={4} className="service-card">
            <div className="service-icon">
              <AiOutlineBarChart />
            </div>
            <h3 className="service-title">Business Intelligence</h3>
            <p className="service-description">
              Empowering businesses with insights and strategies for data-driven decision-making.
            </p>
          </Col>
          <Col xs={12} md={6} lg={4} className="service-card">
            <div className="service-icon">
              <AiOutlineCluster />
            </div>
            <h3 className="service-title">Deep Learning</h3>
            <p className="service-description">
              Harnessing neural networks to solve complex problems with cutting-edge AI solutions.
            </p>
          </Col>
          <Col xs={12} md={6} lg={4} className="service-card">
            <div className="service-icon">
              <AiOutlineRobot />
            </div>
            <h3 className="service-title">Machine Learning</h3>
            <p className="service-description">
              Developing intelligent systems that learn and adapt to optimize outcomes.
            </p>
          </Col>
          <Col xs={12} md={6} lg={4} className="service-card">
            <div className="service-icon">
              <AiOutlineLineChart />
            </div>
            <h3 className="service-title">Predictive Analysis</h3>
            <p className="service-description">
              Forecasting trends and behaviors through advanced data analysis techniques.
            </p>
          </Col>
          <Col xs={12} md={6} lg={4} className="service-card">
            <div className="service-icon">
              <AiOutlineDatabase />
            </div>
            <h3 className="service-title">Data Scraping</h3>
            <p className="service-description">
              Extracting valuable information from websites to support data-driven initiatives.
            </p>
          </Col>
          <Col xs={12} md={6} lg={4} className="service-card">
            <div className="service-icon">
              <AiOutlineCloud />
            </div>
            <h3 className="service-title">AI Integration</h3>
            <p className="service-description">
              Seamlessly integrate advanced AI services into your mobile apps and web applications for enhanced functionality and user experience.
            </p>
          </Col>
        </Row>
      </section>

      {/* Contact Us */}
      <section id="contact" className="about"> 
        <h1 className="heading">
        <span className="highlight">Empower your Business with AI solutions</span>
        </h1>
        <div className="row">
          <div className="content">
            <h1 className="H1contact">
              We help businesses innovate and thrive by leveraging advanced AI and cutting-edge
              <span className="highlight"> technology</span>.
            </h1>
            <p>
              Ready to discuss your <span className="highlight">project</span>?
            </p>
            <a
              href="https://forms.fillout.com/t/ihGyAo5rCPus"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Let’s Talk
            </a>
          </div>
        </div>
      </section>

      <section id="team" className="team" style={{ margin: "19px 0 14px 0" }}>
        <Container>
          <Row style={{ justifyContent: "space-between" }}>
            {/* Image Section */}
            <Col md={3} style={{ textAlign: "center" }}>
              <img
                src={abImage}
                alt="Muhammad Abdullah"
                style={{
                  width: "230px",
                  height: "260px",
                  borderRadius: "20px",
                  objectFit: "cover",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                  marginBottom: "15px",
                }}
              />
              {/* CEO Name and Connect Button */}
              <div style={{ marginTop: "10px" }}>
                <h4 className="highlight">
                  Muhammad Abdullah
                </h4>
                <p style={{ fontSize: "1em", color: "lightgray" }}>
                  CEO and Co-Founder
                </p>

                {/* Online Dot and Connect Line */}
                <p style={{ fontSize: "1em", color: "#ffffff", margin: "0 0 16px -39px" }}>
                  <span
                    style={{
                      display: "inline-block",
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#28a745", /* Online green color */
                      marginRight: "8px",
                    }}
                  ></span>
                  Let’s connect with our lead today
                </p>
                <section id="about" className="about">
                  <div className="row">
                    <div className="content">
                      <a
                        href="https://forms.fillout.com/t/ihGyAo5rCPus"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                      >
                        Book a call
                      </a>
                    </div>
                  </div>
                </section>

              </div>
            </Col>    {/* Introduction Section */}
            <Col md={7} style={{ color: "#ddd", padding: "0 0 75px 0", marginLeft: "20px" }}>
              <p
                style={{
                  fontSize: "1.4em",
                  lineHeight: "1.8",
                  marginTop: "20px",
                }}
              >
                <span className="highlight">Muhammad Abdullah</span> specializes in leveraging
                <span className="highlight"> Machine Learning (ML)</span> and
                <span className="highlight"> Artificial Intelligence (AI)</span> to develop
                innovative, scalable solutions. With a background in
                <span className="highlight"> BSIT</span> studies at
                <span className="highlight"> PUCIT</span>, his work focuses on empowering
                businesses to solve <span className="highlight">complex challenges</span> and thrive
                in the ever-evolving <span className="highlight">digital world</span>.
              </p>



            </Col>
          </Row>
        </Container>
      </section>

    </section>
  );
}

export default Home;
