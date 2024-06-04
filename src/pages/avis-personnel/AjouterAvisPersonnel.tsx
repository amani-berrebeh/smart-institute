import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  Form,
  Image,
  InputGroup,
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
import Select from "react-select";

const AjouterAvisPersonnel = () => {
  document.title = "Ajouter Avis Personnel | Smart Institute";
  const navigate = useNavigate();

  // description editor
  const editorRef = useRef<any>();
  const [editor, setEditor] = useState(false);
  const { CKEditor, ClassicEditor }: any = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
    setEditor(true);
  }, []);

  const [data, setData] = useState("");
  // end description editor
  // dropZone
  const [selectedFiles, setSelectedFiles] = useState([]);

  function handleAcceptedFiles(files: any) {
    files.map((file: any) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setSelectedFiles(files);
  }

  function formatBytes(bytes: any, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  const handleDeleteFile = (indexToRemove: number) => {
    setSelectedFiles((prevFiles) => {
      // Create a new array excluding the file at the specified index
      const updatedFiles = prevFiles.filter(
        (file, index) => index !== indexToRemove
      );
      return updatedFiles;
    });
  };
  // end dropZone

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const handleDateChange = (selectedDates: Date[]) => {
    // Assuming you only need the first selected date
    setSelectedDate(selectedDates[0]);
  };

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
                        <h5 className="card-title">Nouvel Avis Personnel</h5>
                      </div>
                    </div>
                  </Card.Header>
                  <Card.Body></Card.Body>
                  <div className="mb-3">
                    <Form className="tablelist-form">
                      <input type="hidden" id="id-field" />
                      <Row>
                        <Row>
                          {/* First Name  == Done */}
                          <Col lg={6}>
                            <div className="mb-3">
                              <Form.Label htmlFor="titre">
                                <h4 className="card-title mb-0">Titre</h4>
                              </Form.Label>
                              <Form.Control
                                type="text"
                                id="Titre"
                                placeholder="Titre"
                                // required
                              />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Form.Label htmlFor="dateOfBirth">
                                <h4 className="card-title mb-0">Date</h4>
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
                        </Row>
                        <Row>
                          <Col lg={12}>
                            <Card>
                              <Card.Header>
                                <h4 className="card-title mb-0">Description</h4>
                              </Card.Header>
                              <Card.Body>
                                {editor ? (
                                  <CKEditor
                                    editor={ClassicEditor}
                                    data={data}
                                    onReady={(editor: any) => {
                                      // You can store the "editor" and use when it is needed.
                                      console.log(
                                        "Editor is ready to use!",
                                        editor
                                      );
                                    }}
                                    onChange={(event: any, editor: any) => {
                                      const data = editor.getData();
                                      setData(data);
                                    }}
                                  />
                                ) : (
                                  <p>ckeditor5</p>
                                )}

                                {/* <div className="snow-editor" style={{ height: 300 }}>
                                        <div ref={quillRef} />
                                    </div> */}
                              </Card.Body>
                            </Card>
                          </Col>
                        </Row>

                        <Row>
                          <Col lg={6}>
                            <div className="mb-3">
                              <label
                                htmlFor="legalcardBase64String"
                                className="form-label"
                              >
                                <h4 className="card-title mb-0">
                                  Fichier (pdf)
                                </h4>
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
                          <Col lg={6}>
                            <Form.Label
                              htmlFor="basic-url"
                              className="form-label"
                            >
                              <h4 className="card-title mb-0">Lien</h4>
                            </Form.Label>
                            <InputGroup>
                              <span
                                className="input-group-text"
                                id="basic-addon3"
                              >
                                Insérer un lien
                              </span>
                              <Form.Control
                                type="text"
                                id="basic-url"
                                aria-describedby="basic-addon3"
                              />
                            </InputGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={12}>
                            <Card>
                              <Card.Header>
                                <div className="d-flex">
                                  <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm">
                                      <div className="avatar-title rounded-circle bg-light text-primary fs-20">
                                        <i className="bi bi-images"></i>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex-grow-1">
                                    <h5 className="card-title mb-1">
                                      Gallerie de Photos
                                    </h5>
                                    <p className="text-muted mb-0">
                                      Ajouter des images à l'avis
                                    </p>
                                  </div>
                                </div>
                              </Card.Header>
                              <Card.Body>
                                <div className="dropzone my-dropzone">
                                  <Dropzone
                                    onDrop={(acceptedFiles) => {
                                      handleAcceptedFiles(acceptedFiles);
                                    }}
                                  >
                                    {({ getRootProps, getInputProps }) => (
                                      <div className="dropzone dz-clickable text-center">
                                        <div
                                          className="dz-message needsclick"
                                          {...getRootProps()}
                                        >
                                          <div className="mb-3">
                                            <i className="display-4 text-muted ri-upload-cloud-2-fill" />
                                          </div>
                                          <h5>
                                          Déposez des photos ici ou cliquez pour télécharger.
                                          </h5>
                                        </div>
                                      </div>
                                    )}
                                  </Dropzone>
                                  <div
                                    className="list-unstyled mb-0"
                                    id="file-previews"
                                  >
                                    {selectedFiles.map((f: any, i: number) => {
                                      return (
                                        <Card
                                          className="mt-1 mb-0 shadow-none border dz-preview dz-processing dz-image-preview dz-success dz-image  dz-complete"
                                          key={i + "-file"}
                                        >
                                          <div className="p-2">
                                            <Row className="align-items-center">
                                              <Col className="col-auto">
                                                <div className="image">
                                                  <img
                                                    // data-dz-thumbnail=""
                                                    className="avatar-sm rounded bg-light"
                                                    alt={f.name}
                                                    src={f.preview}
                                                  />
                                                </div>
                                              </Col>
                                              <Col>
                                                <Link
                                                  to="#"
                                                  className="text-muted font-weight-bold"
                                                >
                                                  {f.name}
                                                </Link>
                                                <p className="mb-0">
                                                  <strong>
                                                    {f.formattedSize}
                                                  </strong>
                                                </p>
                                              </Col>
                                              <Col className="col-auto">
                                                <button
                                                  type="button"
                                                  className="btn btn-danger btn-sm"
                                                  onClick={() =>
                                                    handleDeleteFile(i)
                                                  }
                                                >
                                                  Delete
                                                </button>
                                              </Col>
                                            </Row>
                                          </div>
                                        </Card>
                                      );
                                    })}
                                  </div>
                                </div>
                                <div className="error-msg mt-1">
                                  Please add a product images.
                                </div>
                              </Card.Body>
                            </Card>
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

export default AjouterAvisPersonnel;
