import React, { useState } from "react";
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
import "./style.css"

// Import images
import img1 from "assets/images/small/img-1.jpg";
import img2 from "assets/images/small/img-2.jpg";
import img3 from "assets/images/small/img-3.jpg";
import img4 from "assets/images/small/img-4.jpg";
import img5 from "assets/images/small/img-5.jpg";
import img6 from "assets/images/small/img-6.jpg";
import avatar1 from "assets/images/users/avatar-1.jpg";
import student from "assets/images/etudiant.png";
import file from "assets/images/demande.png";


const EditReclamationEtudiant = () => {
  document.title = "Modifier Réclamation Etudiant | Smart University";
  const location = useLocation();
  console.log("state", location);
  const studentId= location.state?.studentId?._id!
  const navigate = useNavigate();
  const Navigate = (studentId: any) => {
    navigate("/reclamation-etudiant/single-reclamation-etudiant");
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumb
            title="Réclamation Etudiant"
            pageTitle="Modifier la réclamation"
          />
          <Row>
            <Col lg={12}>
              <Card>
              
                <Card.Body>
                  <Card className="border-0 shadow-none mb-0">
                    <Card.Body
                      className="rounded profile-basic mb-n5"
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
                          className="avatar-xxl rounded-circle p-1 bg-body mt-n5"
                        />
                      </div>
                    </Card.Body>
                    <Row>
            <Col xxl={6} lg={6}>
              <Card className="categrory-widgets overflow-hidden">
                <div className="card-header d-flex align-items-center">
                  <h5 className="card-title flex-grow-1 mb-0">
                    Détails de l'étudiant{" "}
                    {/* <i className="bi bi-mortarboard-fill"></i> */}
                  </h5>
                  <div className="flex-shrink-0">
                    <Button
                      onClick={() => Navigate(studentId)}
                      type="button"
                      className="btn btn-info btn-label m-1"
                    >
                      <i className="bi bi-eye label-icon align-middle fs-16 me-2"></i>
                      Voir étudiant{" "}
                    </Button>
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
                          <td className="">Nom et prénom:</td>
                          <td>
                            <span className="mb-1 ">
                              {location.state?.studentId?.nom_fr!} {location.state?.studentId?.prenom_fr!}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="">CIN:</td>
                          <td>
                            <span className="mb-1 ">{location.state?.studentId?.num_CIN!}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="">Classe:</td>
                          <td>
                            <span className="mb-1 ">
                            {location.state?.studentId?.groupe_classe!}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="">E-mail:</td>
                          <td>
                            <span className="mb-1 ">
                            {location.state?.studentId?.email!}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="">Téléphone:</td>
                          <td>
                            <span className="mb-1 ">{location.state?.studentId?.num_phone!}</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <img
                  src={student}
                  alt=""
                  className="img-fluid category-img object-fit-cover"
                />
              </Card>
            </Col>
            <Col xxl={6} lg={6}>
                        <Card className="categrory-widgets overflow-hidden">
                          <div className="card-header d-flex align-items-center">
                            <h5 className="card-title flex-grow-1 mb-0">
                              Détails de la réclamation
                            </h5>
                            <div className="flex-shrink-0">
                              <Button
                                type="button"
                                className="btn btn-warning btn-label m-1"
                              >
                                <i className="bi bi-file-earmark-arrow-down label-icon align-middle fs-16 me-2"></i>
                                Pièce-jointe
                              </Button>
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
                                    <td className="">Description:</td>
                                    <td>
                                      <span className="mb-1 ">
                                       {location.state.description}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="">Date de création</td>
                                    <td>{location.state.createdAt}</td>
                                  </tr>
                                  <tr>
                                    <td className="">Date d'exécution</td>
                                    <td>{location.state.updatedAt}</td>
                                  </tr>
                                  <tr>
                                    <td>Réponse :</td>
                                    <td className="d-flex align-items-center">
                                      <textarea
                                        className="form-control  muted-placeholder me-2"
                                        id="basiInput"
                                        placeholder="Taper votre réponse"
                                        rows={2}
                                      ></textarea>
                                      <button
                                        type="button"
                                        className="btn btn-success btn-icon"
                                      >
                                        <i className="bi bi-send"></i>
                                      </button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="">Etat:</td>
                                    <span className="badge bg-danger-subtle text-danger">
                                      en cours
                                    </span>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          {/* <img
                  src={file}
                  alt=""
                  className="img-fluid category-img object-fit-cover"
                /> */}
                        </Card>
                      </Col>
          </Row>
                  </Card>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
         
        </Container>
      </div>
    </React.Fragment>
  );
};

export default EditReclamationEtudiant;
