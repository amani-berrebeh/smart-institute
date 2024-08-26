// import { useFetchShortCodeQuery } from "features/shortCode/shortCodeSlice";
// import { useAddNewTemplateBodyMutation } from "features/templateBody/templateBodySlice";
// import React, { useState } from "react";
// import {
//   Button,
//   Card,
//   Col,
//   Container,
//   Form,
//   Row,
// } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import Swal from "sweetalert2";

// const NewTemplateBody = () => {
//   document.title = "Ajouter Corps du Modèle | Smart Institute";
// const [newTemplateBody] = useAddNewTemplateBodyMutation()
// const { data: shortCodeList = [] } = useFetchShortCodeQuery();
// const navigate = useNavigate()



// const initialTemplateBody = {
//     title: "", 
//     body: "",
//     langue:"",
//     intended_for:""
// }

// const [templateBody, setTemplateBody] = useState(initialTemplateBody)
// const [editorInstance, setEditorInstance] = useState<any>(null); // Store the editor instance

// const {title,
//     body, langue, intended_for
// } = templateBody

// const [selectedLangue, setSelectedLangue] = useState("");
// const [selectedIntendedFor, setSelectedIntendedFor] = useState("");

// const globalShortCodes = shortCodeList.filter(code => code.intended_for === 'global');
// const globalShortCodesAr = shortCodeList.filter(code => (code.intended_for === 'global' && code.langue === 'arabic'));
// const globalShortCodesFr = shortCodeList.filter(code => (code.intended_for === 'global' && code.langue === 'french'));

// const filteredShortCodeList = shortCodeList
//     .filter(code => code.intended_for !== 'global')  // Exclude GLOBAL shortcodes
//     .filter(code => 
//       (selectedLangue ? code.langue === selectedLangue : true) &&
//       (selectedIntendedFor ? code.intended_for === selectedIntendedFor : true)
//     );


//   // const displayShortCodeList = [...globalShortCodes, ...filteredShortCodeList];

// // Combine GLOBAL(arabic or french ) shortcodes with filtered shortcodes
// let displayShortCodeList = [];
// if (selectedLangue === "arabic"){
//   displayShortCodeList = [...globalShortCodesAr, ...filteredShortCodeList.filter(code => code.langue === 'arabic')]
// } else if (selectedLangue === "french"){
//   displayShortCodeList = [ ...globalShortCodesFr, ...filteredShortCodeList.filter(code=> code.langue === "french")]
// }else {
  
//   const globalShortCodes = shortCodeList.filter(code => code.intended_for === 'global');
//   displayShortCodeList = [...globalShortCodes, ...filteredShortCodeList];
// }

// const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setTemplateBody((prevState) => ({
//       ...prevState,
//       [e.target.id]: e.target.value,
//     }));
//   };
//   const onChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setTemplateBody((prevState) => ({
//       ...prevState,
//       langue: e.target.value,
//     }));
//     setSelectedLangue(e.target.value);  // Update state for filtering
//   };

//   const onChangeIntendedFor = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setTemplateBody((prevState) => ({
//       ...prevState,
//       intended_for: e.target.value,
//     }));
//     setSelectedIntendedFor(e.target.value);  // Update state for filtering
//   };


//    const onBodyChange = (event: any, editor: any) => {
//      const data = editor.getData();
//     setTemplateBody((prevState) => ({
//      ...prevState,
//        body: data,
//      }));
//    };
  


//   // const onShortCodeButtonClick = (code: string) => {
//   //   setTemplateBody((prevState) => ({
//   //     ...prevState,
//   //     body: prevState.body + code,
//   //   }));
//   // };
//   const onShortCodeButtonClick = (code: string) => {
//     if (editorInstance) {
//       const model = editorInstance.model;

//       model.change((writer: any) => {
//         const insertPosition = model.document.selection.getFirstPosition();
//         writer.insertText(code, insertPosition);
//       });
//     }
//   };

//   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     newTemplateBody(templateBody).then(() => setTemplateBody(initialTemplateBody));
//     notify();
//     navigate("/template/liste-template-body");
//   };

//   const notify = () => {
//     Swal.fire({
//       position: "center",
//       icon: "success",
//       title: "Template Body has been created successfully",
//       showConfirmButton: false,
//       timer: 2000,
//     });
//   };

//   return (
//     <React.Fragment>
//       <div className="page-content">
//         <Container fluid={true}>
//           <Row>
//             <Col lg={12}>
//               <Card>
//                 <Card.Body>
//                   <Card.Header>
//                     <div className="d-flex">
//                       <div className="flex-shrink-0 me-3">
//                         <div className="avatar-sm">
//                           <div className="avatar-title rounded-circle bg-light text-primary fs-20">
//                             <i className="bi bi-person-lines-fill"></i>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="flex-grow-1">
//                         <h5 className="card-title">Nouveau Corps du Modèle</h5>
//                       </div>
//                     </div>
//                   </Card.Header>
//                   <Card.Body></Card.Body>
//                   <div className="mb-3">
                   


// <Form onSubmit={onSubmit}>
//                       <Row>
//                         <Col lg={12}>
//                           <div className="mb-3">
//                             <Form.Label htmlFor="title">
//                               <h4 className="card-title mb-0">Titre</h4>
//                             </Form.Label>
//                             <Form.Control
//                               type="text"
//                               id="title"
//                               name="title"
//                               placeholder="Entrer titre"
//                               value={templateBody.title}
//                               onChange={onChange}
//                             />
//                           </div>
//                         </Col>
//                         <Col lg={4}>
//                           <div className="mb-3">
//                             <Form.Label htmlFor="langue">Langue</Form.Label>
//                             <select
//                               className="form-select text-muted"
//                               name="langue"
//                               id="langue"
//                               value={templateBody.langue}
//                               onChange={onChangeLanguage}
//                             >
//                               <option value="">Sélectionner la langue</option>
//                               <option value="arabic">Arabe</option>
//                               <option value="french">Français</option>
//                             </select>
//                           </div>
//                         </Col>
//                         <Col lg={4}>
//                           <div className="mb-3">
//                             <Form.Label htmlFor="intended_for">Destiné aux</Form.Label>
//                             <select
//                               className="form-select text-muted"
//                               name="intended_for"
//                               id="intended_for"
//                               value={templateBody.intended_for}
//                               onChange={onChangeIntendedFor}
//                             >
//                               <option value="">Sélectionner</option>
//                               <option value="enseignant">Enseignants</option>
//                               <option value="etudiant">Etudiants</option>
//                               <option value="personnel">Personnels</option>
                            
//                             </select>
//                           </div>
//                         </Col>
//                       </Row>
//                       <Row>
//                         <Col lg={12}>
//                           <div className="mb-3">
//                             {displayShortCodeList.map((code) => (
//                               <Button
//                                 className="m-2"
//                                 onClick={() => onShortCodeButtonClick(code.body)}
//                                 key={code._id} // Assuming `id` exists for uniqueness
//                               >
//                                 {code.titre}
//                               </Button>
//                             ))}
//                           </div>
//                         </Col>
//                       </Row>
//                       <Row>
//                         <Col lg={12} className="mb-3">
//                           <Form.Label htmlFor="body" className="form-label">
//                             <h4 className="card-title mb-0">Corps</h4>
//                           </Form.Label>
//                           <CKEditor
//                             editor={ClassicEditor}
//                             data={templateBody.body}
//                             onChange={onBodyChange}
//                             id="body"
//                           />
//                         </Col>
//                       </Row>
//                       <Col lg={12}>
//                         <div className="hstack gap-2 justify-content-end">
//                           <Button
//                             variant="primary"
//                             id="add-btn"
//                             type="submit"
//                           >
//                             Ajouter Corps
//                           </Button>
//                         </div>
//                       </Col>
//                     </Form>

//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </React.Fragment>
//   );
// };

// export default NewTemplateBody;


import { useFetchShortCodeQuery } from "features/shortCode/shortCodeSlice";
import { useAddNewTemplateBodyMutation } from "features/templateBody/templateBodySlice";
import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Swal from "sweetalert2";

const NewTemplateBody = () => {
  document.title = "Ajouter Corps du Modèle | Smart Institute";

  const [newTemplateBody] = useAddNewTemplateBodyMutation();
  const { data: shortCodeList = [] } = useFetchShortCodeQuery();
  const navigate = useNavigate();

  const initialTemplateBody = {
    title: "",
    body: "",
    langue: "",
    intended_for: "",
  };

  const [templateBody, setTemplateBody] = useState(initialTemplateBody);
  const [editorInstance, setEditorInstance] = useState<any>(null); // Store the editor instance

  const { title, body, langue, intended_for } = templateBody;

  const [selectedLangue, setSelectedLangue] = useState("");
  const [selectedIntendedFor, setSelectedIntendedFor] = useState("");

  const globalShortCodes = shortCodeList.filter(
    (code) => code.intended_for === "global"
  );
  const globalShortCodesAr = shortCodeList.filter(
    (code) => code.intended_for === "global" && code.langue === "arabic"
  );
  const globalShortCodesFr = shortCodeList.filter(
    (code) => code.intended_for === "global" && code.langue === "french"
  );

  const filteredShortCodeList = shortCodeList
    .filter((code) => code.intended_for !== "global") // Exclude GLOBAL shortcodes
    .filter(
      (code) =>
        (selectedLangue ? code.langue === selectedLangue : true) &&
        (selectedIntendedFor ? code.intended_for === selectedIntendedFor : true)
    );

  // Combine GLOBAL(arabic or french) shortcodes with filtered shortcodes
  let displayShortCodeList = [];
  if (selectedLangue === "arabic") {
    displayShortCodeList = [
      ...globalShortCodesAr,
      ...filteredShortCodeList.filter((code) => code.langue === "arabic"),
    ];
  } else if (selectedLangue === "french") {
    displayShortCodeList = [
      ...globalShortCodesFr,
      ...filteredShortCodeList.filter((code) => code.langue === "french"),
    ];
  } else {
    const globalShortCodes = shortCodeList.filter(
      (code) => code.intended_for === "global"
    );
    displayShortCodeList = [...globalShortCodes, ...filteredShortCodeList];
  }

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTemplateBody((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTemplateBody((prevState) => ({
      ...prevState,
      langue: e.target.value,
    }));
    setSelectedLangue(e.target.value); // Update state for filtering
  };

  const onChangeIntendedFor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTemplateBody((prevState) => ({
      ...prevState,
      intended_for: e.target.value,
    }));
    setSelectedIntendedFor(e.target.value); // Update state for filtering
  };

  const onBodyChange = (event: any, editor: any) => {
    const data = editor.getData();
    setTemplateBody((prevState) => ({
      ...prevState,
      body: data,
    }));
  };

  // const onShortCodeButtonClick = (code: string) => {
  //   if (editorInstance) {
  //     console.log("Editor instance found, inserting shortcode:", code);
  //     const model = editorInstance.model;
  //     model.change((writer: any) => {
  //       const insertPosition = model.document.selection.getFirstPosition();
  //       console.log("Inserting at position:", insertPosition);
  //       writer.insertText(code, insertPosition);
  //     });
  //   } else {
  //     console.error("Editor instance not found.");
  //   }
  // };
  const onShortCodeButtonClick = (code: string) => {
    setTemplateBody((prevState) => ({
      ...prevState,
      body: prevState.body + code,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    newTemplateBody(templateBody).then(() =>
      setTemplateBody(initialTemplateBody)
    );
    notify();
    navigate("/template/liste-template-body");
  };

  const notify = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Template Body has been created successfully",
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
              <Card>
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
                        <h5 className="card-title">Nouveau Corps du Modèle</h5>
                      </div>
                    </div>
                  </Card.Header>
                  <Card.Body></Card.Body>
                  <div className="mb-3">
                    <Form onSubmit={onSubmit}>
                      <Row>
                        <Col lg={12}>
                          <div className="mb-3">
                            <Form.Label htmlFor="title">
                              <h4 className="card-title mb-0">Titre</h4>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              id="title"
                              name="title"
                              placeholder="Entrer titre"
                              value={templateBody.title}
                              onChange={onChange}
                            />
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className="mb-3">
                            <Form.Label htmlFor="langue">Langue</Form.Label>
                            <select
                              className="form-select text-muted"
                              name="langue"
                              id="langue"
                              value={templateBody.langue}
                              onChange={onChangeLanguage}
                            >
                              <option value="">Sélectionner Langue</option>
                              <option value="arabic">Arabe</option>
                              <option value="french">Français</option>
                            </select>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className="mb-3">
                            <Form.Label htmlFor="intended_for">
                              Destiné aux
                            </Form.Label>
                            <select
                              className="form-select text-muted"
                              name="intended_for"
                              id="intended_for"
                              value={templateBody.intended_for}
                              onChange={onChangeIntendedFor}
                            >
                              <option value="">Sélectionner</option>
                              <option value="enseignant">Enseignants</option>
                              <option value="etudiant">Etudiants</option>
                              <option value="personnel">Personnels</option>
                            </select>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={12}>
                          <div className="mb-3">
                            {displayShortCodeList.map((code) => (
                              <Button
                                className="m-2"
                                onClick={() =>
                                  onShortCodeButtonClick(code.body)
                                }
                                key={code._id} // Assuming `_id` exists for uniqueness
                              >
                                {code.titre}
                              </Button>
                            ))}
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={12} className="mb-3">
                          <Form.Label htmlFor="body" className="form-label">
                            <h4 className="card-title mb-0">Corps</h4>
                          </Form.Label>
                          <CKEditor
                            editor={ClassicEditor}
                            data={templateBody.body}
                            onChange={onBodyChange}
                            id="body"
                          />
                        </Col>
                      </Row>
                      <Col lg={12}>
                        <div className="hstack gap-2 justify-content-end">
                          <Button variant="primary" id="add-btn" type="submit">
                            Ajouter Corps
                          </Button>
                        </div>
                      </Col>
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

export default NewTemplateBody;
