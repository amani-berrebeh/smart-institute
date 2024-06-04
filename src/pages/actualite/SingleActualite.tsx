import React from "react";
import { Button, Card, Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import Breadcrumb from "Common/BreadCrumb";

// Import images
import img1 from "assets/images/small/img-1.jpg";
import img2 from "assets/images/small/img-2.jpg";
import img3 from "assets/images/small/img-3.jpg";
import img4 from "assets/images/small/img-4.jpg";
import img5 from "assets/images/small/img-5.jpg";
import img6 from "assets/images/small/img-6.jpg";

const SingleActualite = () => {
  document.title = "Avis Etudiant | Smart Institute";
  const location = useLocation();
  
  

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumb title="Detail Actualité" pageTitle="Actualité" />
        
          <Row className="align-items-center">
            <Col lg={7} className="mt-2">
              <div>
                <Carousel controls={true} indicators={true}>
                  <Carousel.Item>
                    <Image
                      className="rounded-start img-fluid h-100 object-cover"
                      src={location.state.companyLogo!}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      className="rounded-start img-fluid h-100 object-cover"
                      src={img2}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      className="rounded-start img-fluid h-100 object-cover"
                      src={img3}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
            <Col lg={5}>
              <div className="mt-4 mt-lg-0 ml-0">
                <p className="text-uppercase fw-medium text-muted">
                  Best Products Sales
                </p>
                <h2 className="lh-base fw-semibold mb-3">
                {location.state.stock!}
                </h2>
                <p className="text-muted fs-16">
                  A physical office space will promote collaboration and
                  understanding. Having a physical location for your business
                  allows you to put together the company that you want in an
                  environment where employees can communicate with each other
                  without having to go through any extra steps.
                </p>
               
              </div>
              <Row className="text-center">
                 <Col lg={3} className="mt-2 d-flex justify-content-start">
                 <Button type="button" className="btn btn-soft-primary btn-label btn-lg">
                    <i className="bi bi-link-45deg label-icon align-middle fs-24 me-2"></i>{" "}
                    Lien  
                  </Button>
                 </Col>
                  
                </Row>

                <Row >
                  <Col lg={3} className="mt-2 d-flex justify-content-start">
                  <Button type="button" className="btn btn-soft-danger btn-label btn-lg">
                    <i className="bi bi-filetype-pdf label-icon align-middle fs-24 me-2"></i>{" "}
                    Fichier
                  </Button>{" "}
                  
                  </Col>
                 
               
                </Row>
                <Row>
                <p className="text-uppercase fw-medium text-muted">
                  Auteur: {location.state.sellerName!}
                </p>

                </Row>
            
            </Col>
            
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default SingleActualite;
