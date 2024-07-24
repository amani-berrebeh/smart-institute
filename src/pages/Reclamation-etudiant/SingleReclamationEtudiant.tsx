 import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  Nav,
  Row,
  Tab,
} from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import Breadcrumb from "Common/BreadCrumb";

// Import images
import img1 from "assets/images/small/img-1.jpg";
import img2 from "assets/images/small/img-2.jpg";
import img3 from "assets/images/small/img-3.jpg";
import img4 from "assets/images/small/img-4.jpg";
import img5 from "assets/images/small/img-5.jpg";
import img6 from "assets/images/small/img-6.jpg";
import avatar1 from "assets/images/users/avatar-1.jpg";

const SingleReclamationEtudiant = () => {
  document.title = "Demande Etudiant | Smart Institute";
  const location = useLocation();
  console.log("state", location);
  const navigate = useNavigate();
  const Navigate = (reclamationId: any) => {
    navigate("/reclamation-etudiant/edit-reclamation-etudiant", {
      state: { reclamationId },
    });
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumb
            title="demande Etudiant"
            pageTitle="Modifier La Demande"
          />
          <Row>
            <Col lg={12}>
              <Card>
                {/* <Card.Header>
                                <h5 className="card-title mb-0">Basic Example</h5>
                            </Card.Header> */}
                <Card.Body>
                  <Card className="border-0 shadow-none mb-0">
                    <Card.Body
                      className="rounded profile-basic"
                      style={{
                        backgroundImage: `url(${img4})`,
                        backgroundSize: "cover",
                      }}
                    ></Card.Body>
                    <Card.Body>
                      <div className="mt-n5">
                        <Image
                          src={avatar1}
                          alt=""
                          className="avatar-lg rounded-circle p-1 bg-body mt-n3"
                        />
                      </div>
                    </Card.Body>
                    <Card.Body className="pt-0">
                      <Row className="justify-content-between gy-4">
                        <Col xl={3} md={5}>
                          <h5 className="fs-20"> 
                            {location.state?.studentId.nom_fr!} {location.state?.studentId.prenom_fr!}
                          </h5>
                          <div className="mb-3 text-muted">
                            <i className="bi bi-geo-alt"></i>{" "}
                            {location.state?.studentId.groupe_classe!}
                          </div>
                          <h6 className="fs-16">
                            CIN: <span className="text-muted">{location.state?.studentId.num_CIN!}</span>
                          </h6>
                          <h6 className="fs-16">
                            Tél: <span className="text-muted">{location.state?.studentId.num_phone!}</span>
                          </h6>

                          {/* <div className="hstack gap-2">
                                                    <Button variant="primary">Invite to Project</Button>
                                                    <Button variant='soft-info' className="btn-icon"><i className="bi bi-chat-left-text"></i></Button>

                                                    <Dropdown role="button">
                                                        <Dropdown.Toggle as="a" className="btn btn-soft-danger btn-icon arrow-none">
                                                            <i className="bi bi-three-dots-vertical"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu as="ul" className="dropdown-menu">
                                                            <li><Link className="dropdown-item" to="#">Action</Link></li>
                                                            <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                                            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div> */}
                        </Col>
                        <Col xl={4} md={7}>
                          <div>
                            <h5 className="fs-20">Réclamation</h5>
                            <ul className="list-inline mb-4">
                              <li className="list-inline-item">
                                <h6 className="fs-16 ">
                                  Type:{" "}
                                  <span className="text-muted">
                                  {location.state?.title!}/
                                  {location.state?.description!}
                                  </span>
                                </h6>
                                {/* <h6 className="fs-16" >
                                  Langue:{" "}
                                  <span className="badge bg-info-subtle text-info">
                                    Francais
                                  </span>
                                </h6>
                                <h6 className="fs-16">
                                  Nombre de copie:{" "}
                                  <span className="badge bg-secondary-subtle text-info">
                                    1
                                  </span>
                                </h6> */}
                                <h6 className="fs-16">
                                  Date de création:{" "}
                                  <span className="text-muted">
                                  {location.state?.createdAt!}                                  </span>
                                </h6>
                                 <h6 className="fs-16" >
                                  Status:
                                  <span className="badge bg-info-subtle text-info">
                                  {location.state?.status!} 
                                  </span>
                                </h6>
                              </li>
                            </ul>
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Card.Body>
              </Card>
            </Col>
            
          </Row>
          {/*   */}
        </Container>
      </div>
    </React.Fragment>
  );
};

export default SingleReclamationEtudiant;