import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import "flatpickr/dist/flatpickr.min.css";
import Swal from "sweetalert2";
import { useUpdateEtatEtudiantMutation } from "features/etatEtudiants/etatEtudiants";
import { useUpdateTypeInscriptionEtudiantMutation } from "features/typeInscriptionEtudiant/typeInscriptionEtudiant";

const EditTypeInscriptionEtudiant = () => {
  document.title = " Modifier Inscription Etudiant | Application Smart Institute";
  const navigate = useNavigate();
  const { state: typeInscriptionEtudiant } = useLocation();
  const [editTypeInscriptionEtudiant] = useUpdateTypeInscriptionEtudiantMutation();

  const [formData, setFormData] = useState({
    _id: "",
    value_type_inscription: "",
    type_ar: "",
    type_fr: "",
  });

  useEffect(() => {
    if (typeInscriptionEtudiant) {
      setFormData({
        _id: typeInscriptionEtudiant._id,
        value_type_inscription: typeInscriptionEtudiant.value_type_inscription,
        type_ar: typeInscriptionEtudiant.type_ar,
        type_fr: typeInscriptionEtudiant.type_fr ,
      });
    }
  }, [typeInscriptionEtudiant]);

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
  const onSubmitTypeInscriptionEtudiant = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await editTypeInscriptionEtudiant(formData).unwrap();
      notify();
      navigate("/parametre/inscription-etudiants");
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
      title: "Type inscription étudiant a été modifié avec succès",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const errorNotification = (error: any) => {
    Swal.fire({
      position: "center",
      icon: "error",
      title: `Modification type inscription étudiant échouée ${error}`,
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
              <Form className="tablelist-form" onSubmit={onSubmitTypeInscriptionEtudiant}>
                <div
                  id="alert-error-msg"
                  className="d-none alert alert-danger py-2"
                ></div>
                <input type="hidden" id="id-field" />

                <Row>
                  <Col lg={4}>
                    <div className="mb-3">
                      <Form.Label htmlFor="value_type_inscription">Valeur</Form.Label>
                      <Form.Control
                        type="text"
                        id="value_type_inscription"
                        placeholder=""
                        required
                        onChange={onChange}
                        value={formData.value_type_inscription}
                      />
                    </div>
                  </Col>

                  <Col lg={4}>
                    <div className="mb-3">
                      <Form.Label htmlFor="type_fr">Inscription Etudiant</Form.Label>
                      <Form.Control
                        type="text"
                        id="type_fr"
                        placeholder=""
                        required
                        onChange={onChange}
                        value={formData.type_fr}
                      />
                    </div>
                  </Col>

                  <Col lg={4}>
                    <div
                      className="mb-3"
                      style={{
                        direction: "rtl",
                        textAlign: "right",
                      }}
                    >
                      <Form.Label htmlFor="type_ar">تسجيل الطالب</Form.Label>
                      <Form.Control
                        type="text"
                        id="type_ar"
                        placeholder=""
                        required
                        onChange={onChange}
                        value={formData.type_ar}
                      />
                    </div>
                  </Col>
                </Row>

                <div className="modal-footer">
                  <div className="hstack gap-2 justify-content-end">
                    <Button
                      className="btn-ghost-danger"
                      onClick={() => {
                        navigate("/parametre/inscription-etudiants");
                      }}
                    >
                      Retour
                    </Button>
                    <Button variant="success" id="add-btn" type="submit">
                      Modifier
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

export default EditTypeInscriptionEtudiant;