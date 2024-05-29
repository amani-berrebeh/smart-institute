import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import Breadcrumb from "Common/BreadCrumb";
import { Link, useNavigate } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import Dropzone from "react-dropzone";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import SimpleBar from "simplebar-react";
import country from "Common/country";
import Swal from "sweetalert2";

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import { useSelector } from "react-redux";



const AjouterAvisEnseignant = () => {
  document.title = "create Account | Bouden Coach Travel";
  const navigate = useNavigate();
  const [selectedFiles, setselectedFiles] = useState([]);
  // Mutation to create account


  // Account's Values and Functions
  // groupId: "65def391137b93f458f52c1f",
 
 

  const [seletedCountry, setseletedCountry] = useState<any>({});
  const [seletedCountry1, setseletedCountry1] = useState<any>({});

  // change gender
  const [selectedOption, setSelectedOption] = useState<string>("");
  // This function is triggered when the select changes
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
  };

  //change civil status
  const [selectedStatus, setSelectedStatus] = useState<string>("");

  const selectChangeStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedStatus(value);
  };

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  //change station
  const [selectedStation, setSelectedStation] = useState<string>("");

  const selectChangeStation = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedStation(value);
  };

  //change group
  const [selectedGroup, setSelectedGroup] = useState<string>("");

  // const selectChangeGroup = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   const value = event.target.value;
  //   setSelectedGroup(value);
  // };

  const handleDateChange = (selectedDates: Date[]) => {
    // Assuming you only need the first selected date
    setSelectedDate(selectedDates[0]);
  };

  
  const notify = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Account has been created successfully",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  function handleAcceptedFiles(files: any) {
    files.map((file: any) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setselectedFiles(files);
  }

  /* Formats the size */
  function formatBytes(bytes: any, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  function convertToBase64(
    file: File
  ): Promise<{ base64Data: string; extension: string }> {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const base64String = fileReader.result as string;
        // const base64Data = base64String.split(",")[1]; // Extract only the Base64 data
        const [, base64Data] = base64String.split(","); // Extract only the Base64 data
        const extension = file.name.split(".").pop() ?? ""; // Get the file extension
        resolve({ base64Data, extension });
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
      fileReader.readAsDataURL(file);
    });
  }
  
 

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Row>
            <Col lg={12}>
              <Card>
                {/* <Card.Header>
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar-sm">
                        <div className="avatar-title rounded-circle bg-light text-primary fs-20">
                          <i className="bi bi-person-workspace"></i>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="card-title mb-1">Employee's Account</h5>
                    </div>
                  </div>
                </Card.Header> */}
                <Card.Body>
                  <Card.Header>
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <div className="avatar-sm">
                          <div className="avatar-title rounded-circle bg-light text-primary fs-20">
                            <i className="bi bi-person-lines-fill"></i>
                          </div>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="card-title">Nouvel Avis Etudiant</h5>
                      </div>
                    </div>
                  </Card.Header>
                  <Card.Body></Card.Body>
                  <div className="mb-3">
                    <Form className="tablelist-form" >
                      <input type="hidden" id="id-field" />
                      <Row>
                     
                        <Row>
                          {/* First Name  == Done */}
                          <Col lg={6}>
                            <div className="mb-3">
                              <Form.Label htmlFor="titre">
                              Titre
                              </Form.Label>
                              <Form.Control
                                type="text"
                                id="Titre"
                                placeholder="Titre"
                                // required
                               
                              />
                            </div>
                          </Col>
                          {/* Last Name == Done */}
                          <Col lg={6}>
                            <div className="mb-3">
                              <Form.Label htmlFor="Description" >
                              Description
                              </Form.Label>
                              <Form.Control
                                type="Textarea"
                                id="Description"
                                placeholder="Description"
                             
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                      <Col lg={6}>
                            <div className="mb-3" >
                              <Form.Label htmlFor="dateOfBirth">
                              Date
                              </Form.Label>
                              <Flatpickr
                                value={selectedDate!}
                                onChange={handleDateChange}
                                className="form-control flatpickr-input"
                                placeholder="Select Date"
                                options={{
                                  dateFormat: "d M, Y",
                                }}
                                id="dateOfBirth"
                              />

                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Form.Label htmlFor="civilStatus">
                                Classe
                              </Form.Label>
                              <select
                                className="form-select text-muted"
                                name="ccivilStatus"
                                id="civilStatus"
                                // required
                                onChange={selectChangeStatus}
                              >
                                <option value="">LGM1</option>
                                <option value="Married">LGM2</option>
                                <option value="Single">LTIC1</option>
                                <option value="Divorced">LTIC2</option>
                                <option value="Widowed">MRME1</option>
                              </select>
                            </div>
                          </Col>
                        </Row>
                  
                  
                  
                        <Row>
                        <Col lg={6}>
                                <div className="mb-3">
                                  <label
                                    htmlFor="legalcardBase64String"
                                    className="form-label"
                                  >
                                    Image d'avis
                                  </label>
                                  <Form.Control
                                    name="legalcardBase64String"
                                    
                                    type="file"
                                    id="legalcardBase64String"
                                    accept=".jpg,.jpeg,.png"
                                    placeholder="choisir Image"
                                    className="text-muted"

                                    // required
                                  />
                                </div>
                              </Col>
                              <Col lg={6}>
                                <div className="mb-3">
                                  <label
                                    htmlFor="legalcardBase64String"
                                    className="form-label"
                                  >
                                    Fichier (pdf)
                                  </label>
                                  <Form.Control
                                    name="legalcardBase64String"
                                    
                                    type="file"
                                    id="legalcardBase64String"
                                    accept=".pdf"
                                    placeholder="Choose File"
                                    className="text-muted"

                                    // required
                                  />
                                </div>
                              </Col>
                         
                        </Row>

                        
                       
                        <Col lg={12}>
                          <div className="hstack gap-2 justify-content-end">
                            <Button
                              variant="primary"
                              id="add-btn"
                              type="submit"
                            >
                              Ajouter Avis Etudiant
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AjouterAvisEnseignant;
