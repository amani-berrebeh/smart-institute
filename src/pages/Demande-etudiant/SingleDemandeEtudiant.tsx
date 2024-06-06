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
import student from "assets/images/etudiant.png"
import file from "assets/images/demande.png"

const SingleDemandeEtudiant = () => {
  document.title = "Modifier demande Etudiant | Smart Institute";
  const state = useLocation();
  console.log("state", state);
  const navigate = useNavigate();
  const Navigate = () => {
       
    navigate('/accountEtudiant'); 
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
                  </Card>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xxl={6} lg={6}>
              <Card className="categrory-widgets overflow-hidden">
                <div className="card-header d-flex align-items-center">
                  <h5 className="card-title flex-grow-1 mb-0">
                    Détails de l'étudiant{" "}
                    {/* <i className="bi bi-mortarboard-fill"></i> */}
                  </h5>
                  <div className="flex-shrink-0">
                  <Button  onClick={() => Navigate()} type="button" className="btn btn-info btn-label m-1"><i className="bi bi-eye label-icon align-middle fs-16 me-2"></i>Voir étudiant </Button>

                    
                  </div>
                </div>
                <div className="card-body">
                <div className="text-center">
                    <i className="bi bi-mortarboard fs-1 text-muted"></i>
                    </div>
                  <div className="table-responsive">
                    <table className="table table-sm table-borderless align-middle description-table mb-0">
                      <tbody>
                        <tr>
                          <td className="fs-5">Nom et prénom:</td>
                          <td>
                            <span className="mb-1 fs-5">
                              {state.state?.etudiant!}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="fs-5">CIN:</td>
                          <td>
                            <span className="mb-1 fs-5">
                              {state.state?.CIN!}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="fs-5">Classe:</td>
                          <td>
                            <span className="mb-1 fs-5">
                              {state.state?.classe!}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="fs-5">Téléphone</td>
                          <td>
                            <span className="mb-1 fs-5">
                              {state.state?.CIN!}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <img src={student} alt="" className="img-fluid category-img object-fit-cover" />
              </Card>
            </Col>
            <Col xxl={6} lg={6}>
              <Card className="categrory-widgets overflow-hidden">
                <div className="card-header d-flex align-items-center">
                  <h5 className="card-title flex-grow-1 mb-0">
                    Détails de la demande
                  </h5>
                  <div className="flex-shrink-0">
                  <Button type="button" className="btn btn-primary btn-label m-1"><i className="bi bi-file-earmark-arrow-down label-icon align-middle fs-16 me-2"></i>Générer</Button>
                  <Button type="button" className="btn btn-success btn-label"><i className="bi bi-postcard label-icon align-middle fs-16 me-2"></i> Notifier le personnel</Button>
                  </div>
                </div>
                <div className="card-body">
                  <div className="text-center">
                    <i className="bi bi-card-list fs-1 text-muted"></i>
                   
                  </div>
                  <div className="table-responsive">
                    <table className="table table-sm table-borderless align-middle description-table mb-0">
                      <tbody>
                        <tr>
                          <td className="fs-5">Pièce demandée:</td>
                          <td>
                            <span className="mb-1 fs-5">
                            {state.state?.soustype!}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="fs-5">Langue:</td>
                          <td>
                          <span className="badge bg-info-subtle text-info">
                        Français
                      </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="fs-5">Nombre de copie:</td>
                          <td>
                          <span className="badge bg-secondary-subtle text-secondary">
                        1
                      </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="fs-5">Etat de la demande:</td>
                          <td>
                          <span className="badge bg-danger-subtle text-danger">
                     {state.state?.status!}
                      </span> 
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <img src={file} alt="" className="img-fluid category-img object-fit-cover" />
              </Card>
            </Col>
          </Row>
          {/* <Row>
            <Col lg={12}>
              <div className="hstack gap-2 justify-content-end">
                <Button variant="primary" id="add-btn" type="submit">
                  Modifer la Demande
                </Button>
              </div>
            </Col>
          </Row> */}
        </Container>
      </div>
    </React.Fragment>
  );
};

export default SingleDemandeEtudiant;
