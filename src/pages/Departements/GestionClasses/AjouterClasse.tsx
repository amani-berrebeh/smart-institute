import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "flatpickr/dist/flatpickr.min.css";
import Swal from "sweetalert2";
import { useFetchDepartementsQuery } from "features/departement/departement";
import { useFetchNiveauxQuery } from "features/niveau/niveau";
import { useFetchSectionsQuery } from "features/section/section";
import { Classe, useAddClasseMutation } from "features/classe/classe";


const AddClasse = () => {
  document.title = " Ajouter Classe | Application Smart Institute";
  const navigate = useNavigate();

  function tog_retourParametres() {
    navigate("/departement/gestion-classes/liste-classes");
  }

  const [createClasse] = useAddClasseMutation();
  const { data: departements = [] } = useFetchDepartementsQuery();
  const { data: niveau = [] } = useFetchNiveauxQuery();
  const { data: section = [] } = useFetchSectionsQuery();

  const [formData, setFormData] = useState<Classe>({
    _id: "",
    nom_classe_fr: "",
    nom_classe_ar: "",
    departement: {
      _id: "",
      description: "",
      volume_horaire: "",
      nom_chef_dep: "",
      name_ar: "",
      name_fr: "",
      SignatureFileExtension: "",
      SignatureFileBase64String: "",
      signature: "",
    },
    niveau_classe: {
      _id: "",
      name_niveau_ar: "",
      name_niveau_fr: "",
      abreviation: "",
    },
    section_classe: {
      _id: "",
      name_section_fr: "",
      name_section_ar: "",
      abreviation: "",
    },
    matieres: [],
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
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmitClasse = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createClasse(formData).unwrap();
      notify();
      navigate("/departement/gestion-classes/liste-classes");
    } catch (error: any) {
     console.log(error)
    }
  };

  const notify = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Classe a été crée avec succés",
      showConfirmButton: false,
      timer: 2000,
    });
  };
  const error = (error: any) => {
    Swal.fire({
      position: "center",
      icon: "error",
      title: `Creation classe échoué ${error}`,
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
              <Form className="tablelist-form" onSubmit={onSubmitClasse}>
                <div
                  id="alert-error-msg"
                  className="d-none alert alert-danger py-2"
                ></div>
                <input type="hidden" id="id-field" />
                <Row>
                  <Col lg={4}>
                    <div className="mb-3">
                      <Form.Label htmlFor="nom_classe_fr">
                        Nom Classe (FR)
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="nom_classe_fr"
                        placeholder=""
                        required
                        onChange={onChange}
                        value={formData.nom_classe_fr}
                      />
                    </div>
                  </Col>

                  {/* <Col lg={4}>
                    <div className="mb-3">
                      <Form.Label htmlFor="nom_classe_ar">Nom Classe (AR)</Form.Label>
                      <Form.Control
                        type="text"
                        id="nom_classe_ar"
                        placeholder=""
                        required
                        onChange={onChange}
                        value={formData.nom_classe_ar}
                      />
                    </div>
                  </Col> */}

                  <Col lg={4}>
                    <div className="mb-3">
                      <Form.Label htmlFor="departement">Departement</Form.Label>
                      <select
                        className="form-select text-muted"
                        name="departement"
                        id="departement"
                        value={formData.departement.name_fr}
                        onChange={handleChange}
                      >
                        <option value="">Sélectionner Département</option>
                        {departements.map((departement) => (
                          <option key={departement._id} value={departement._id}>
                            {departement.name_fr}
                          </option>
                        ))}
                      </select>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="mb-3">
                      <Form.Label htmlFor="niveau_classe">Niveau</Form.Label>
                      <select
                        className="form-select text-muted"
                        name="niveau_classe"
                        id="niveau_classe"
                        value={formData.niveau_classe.name_niveau_fr}
                        onChange={handleChange}
                      >
                        <option value="">Sélectionner Niveau</option>
                        {niveau.map((niveau) => (
                          <option key={niveau._id} value={niveau._id}>
                            {niveau.name_niveau_fr}
                          </option>
                        ))}
                      </select>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="mb-3">
                      <Form.Label htmlFor="section_classe">Section</Form.Label>
                      <select
                        className="form-select text-muted"
                        name="section_classe"
                        id="section_classe"
                        value={formData.section_classe.name_section_fr}
                        onChange={handleChange}
                      >
                        <option value="">Sélectionner Section</option>
                        {section.map((section) => (
                          <option key={section._id} value={section._id}>
                            {section.name_section_fr}
                          </option>
                        ))}
                      </select>
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

export default AddClasse;