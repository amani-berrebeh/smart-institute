import React, {useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import {useNavigate } from "react-router-dom";
import "flatpickr/dist/flatpickr.min.css";
import Swal from "sweetalert2";
import { useAddEtatEtudiantMutation } from "features/etatEtudiants/etatEtudiants";
import { useAddTypeInscriptionEtudiantMutation } from "features/typeInscriptionEtudiant/typeInscriptionEtudiant";

const AddTypeInscriptionEtudiant = () => {
  document.title = " Ajouter Type Inscription Etudiant | Application Smart Institute";
  const navigate = useNavigate();

  function tog_retourParametres() {
    navigate("/parametre/inscription-etudiants");
  }

  const [createTypeInscriptionEtudiant] = useAddTypeInscriptionEtudiantMutation();

  const [formData, setFormData] = useState({
    _id: "",
    value_type_inscription: "",
    type_ar: "",
    type_fr: "",
  });
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

  const onSubmitEtatEtudiant = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createTypeInscriptionEtudiant(formData).unwrap();
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
      title: "Type inscription étudiant a été crée avec succés",
      showConfirmButton: false,
      timer: 2000,
    });
  };
  const error = (error: any) => {
    Swal.fire({
      position: "center",
      icon: "error",
      title: `Creation type inscription étudiant échoué ${error}`,
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
              <Form className="tablelist-form" onSubmit={onSubmitEtatEtudiant}>
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

export default AddTypeInscriptionEtudiant;