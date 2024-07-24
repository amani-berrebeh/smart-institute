import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import "flatpickr/dist/flatpickr.min.css";
import Swal from "sweetalert2";
import { useAddSectionMutation, useUpdateSectionMutation } from "features/section/section";

const EditSection = () => {
  document.title = " Modifier Section | Application Smart Institute";
  const navigate = useNavigate();
  const { state: section } = useLocation();
  const [editSection] = useUpdateSectionMutation();

  function tog_retourParametres() {
    navigate("/departement/gestion-classes/liste-section");
  }

  const [formData, setFormData] = useState({
    _id: "",
    name_section_ar: "",
    name_section_fr: "",
    abreviation: "",
  });

  useEffect(() => {
    if (section) {
      setFormData({
        _id: section._id,
        name_section_ar: section.name_section_ar,
        name_section_fr: section.name_section_fr,
        abreviation: section.abreviation,
        
      });
    }
  }, [section]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const errorAlert = (message: string) => {
    Swal.fire({
      position: "center",
      icon: "error",
      title: message,
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const onSubmitSection = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await editSection(formData).unwrap();
      notify();
      navigate("/departement/gestion-classes/liste-section");
    } catch (error: any) {
      if (error.status === 400) {
        errorAlert("La valeur doit être unique.");
      } else {
        errorAlert("La valeur doit être unique. Veuillez réessayer.");
      }
    }
  };

  const notify = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Section a été modifiée avec succés",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Row>
            <Col lg={12}>
              <Form className="tablelist-form" onSubmit={onSubmitSection}>
                <div
                  id="alert-error-msg"
                  className="d-none alert alert-danger py-2"
                ></div>
                <input type="hidden" id="id-field" />
                <Row>
                  <Col lg={4}>
                    <div className="mb-3">
                      <Form.Label htmlFor="name_section_fr">
                        Nom Section (FR)
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="name_section_fr"
                        placeholder=""
                        required
                        onChange={onChange}
                        value={formData.name_section_fr}
                      />
                    </div>
                  </Col>

                  <Col lg={4}>
                    <div className="mb-3">
                      <Form.Label htmlFor="name_section_ar">Nom Section (AR)</Form.Label>
                      <Form.Control
                        type="text"
                        id="name_section_ar"
                        placeholder=""
                        required
                        onChange={onChange}
                        value={formData.name_section_ar}
                      />
                    </div>
                  </Col> 
                  <Col lg={4}>
                    <div className="mb-3">
                      <Form.Label htmlFor="abreviation">Abréviation</Form.Label>
                      <Form.Control
                        type="text"
                        id="abreviation"
                        placeholder=""
                        required
                        onChange={onChange}
                        value={formData.abreviation}
                      />
                    </div>
                  </Col>
                 
                </Row>

                <div className="modal-footer">
                  <div className="hstack gap-2 justify-content-end">
                    <Button
                      className="btn-ghost-danger"
                      onClick={() => {
                        tog_retourParametres();
                      }}
                    >
                      Retour
                    </Button>
                    <Button variant="success" id="add-btn" type="submit">
                      Ajouter
                    </Button>
                  </div>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default EditSection;