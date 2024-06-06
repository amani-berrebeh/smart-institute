
import React, { useState, useMemo, useCallback } from 'react';
import { Button, Card, Col, Container, Form, Modal, Row, Table } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import CountUp from 'react-countup';
import TableContainer from "Common/TableContainer";
import { demandeEtudiant } from "Common/data/demandeEtudiant";
import Flatpickr from "react-flatpickr";
import dummyImg from "../../assets/images/users/user-dummy-img.jpg"
import { Link } from 'react-router-dom';
import img1 from "assets/images/users/avatar-1.jpg";


const DemandeTable = () => {
    document.title = "Demande Etudiant | Smart Institute";
    const [modal_AddUserModals, setmodal_AddUserModals] = useState<boolean>(false);
    const [isMultiDeleteButton, setIsMultiDeleteButton] = useState<boolean>(false)
    function tog_AddUserModals() {
        setmodal_AddUserModals(!modal_AddUserModals);
    }

    // Checked All
    const checkedAll = useCallback(() => {
        const checkall = document.getElementById("checkAll") as HTMLInputElement;
        const ele = document.querySelectorAll(".userCheckBox");

        if (checkall.checked) {
            ele.forEach((ele: any) => {
                ele.checked = true;
            });
        } else {
            ele.forEach((ele: any) => {
                ele.checked = false;
            });
        }
        checkedbox();
    }, []);

    const checkedbox = () => {
        const ele = document.querySelectorAll(".userCheckBox:checked");
        ele.length > 0 ? setIsMultiDeleteButton(true) : setIsMultiDeleteButton(false);
    }

    const columns = useMemo(
        () => [
          
            {
                Header: "Pièce demandée",
                accessor: "soustype",
                disableFilters: true,
                filterable: true,
            },
           
            {
                Header: "Langue",
                accessor: "langue",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Nombre de copie",
                accessor: "copie",
                disableFilters: true,
                filterable: true,
            },
            // {
            //     Header: "Classe",
            //     accessor: "classe",
            //     disableFilters: true,
            //     filterable: true,
            // },
            {
                     Header: "Date d'envoi",
                     accessor: "date",
                     disableFilters: true,
                     filterable: true,
                 },
                 {
                  Header: "Date de modification",
                  accessor: "",
                  disableFilters: true,
                  filterable: true,
              },
                 {
                  Header: "Etat",
                    disableFilters: true,
                     filterable: true,
                     accessor: (cellProps: any) => {
                        switch (cellProps.status) {
                             case "en cours":
                                return (<span className="badge bg-success-subtle text-success"> {cellProps.status}</span>)
                             case "Inactive":
                                 return (<span className="badge bg-danger-subtle text-danger"> {cellProps.status}</span>)
                             default:
                                 return (<span className="badge bg-success-subtle text-success"> {cellProps.status}</span>)
                         }
                     },
                 },
           
             
            {
                Header: "Actions",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    return (
                        <ul className="hstack gap-2 list-unstyled mb-0">
              <li>
                <Link
                  to="/SingleDemandeEtudiant"
                  state={cellProps}
                  className="badge bg-info-subtle text-info view-item-btn"
                  data-bs-toggle="offcanvas"
                >
                  <i
                    className="ph ph-eye"
                    style={{
                      transition: "transform 0.3s ease-in-out",
                      cursor: "pointer",
                      fontSize: "1.5em",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.4)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  ></i>
                </Link>
              </li>
              <li>
                <Link
                  to="/EditDemandeEtudiant"
                  className="badge bg-success-subtle text-success edit-item-btn"
                  state={cellProps}
                >
                  <i
                    className="ph ph-pencil-line"
                    style={{
                      transition: "transform 0.3s ease-in-out",
                      cursor: "pointer",
                      fontSize: "1.5em",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.4)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  ></i>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="badge bg-danger-subtle text-danger remove-item-btn"
                 
                >
                  <i
                    className="ph ph-trash"
                    style={{
                      transition: "transform 0.3s ease-in-out",
                      cursor: "pointer",
                      fontSize: "1.5em",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.4)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  ></i>
                </Link>
              </li>
            </ul>
                    )
                },
            },
        ],
        [checkedAll]
    );

    return (
        <React.Fragment>
          <Card>
              <Row className="g-0">
                <Col md={3}>
                  <img
                    className="rounded-start img-fluid h-100 object-cover"
                    src={img1}
                    alt="Card img"
                  />
                </Col>
                <Col md={9}>
                  <Card.Header>
                    <div className="flex-grow-1 card-title mb-0">
                      <h5>Besma Miraoui</h5>
                      <p className="text-muted mb-0">بسمة ميراوي</p>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <Row>
                      <Col lg={6} className="m-0 p-0">
                        <div className="table-responsive">
                          <Table className="table-borderless table-sm m-0 p-0 ">
                            <tbody>
                              <tr>
                                <td>Matricule</td>
                                <td className="fw-medium">LISI2Rx-G1</td>
                              </tr>
                              <tr>
                                <td>Cin</td>
                                <td className="fw-medium">04957698</td>
                              </tr>
                             
                            </tbody>
                          </Table>
                        </div>
                      </Col>
                      <Col lg={6} className="m-0 p-0">
                        <div className="table-responsive">
                          <Table className="table-borderless table-sm m-0 p-0 ">
                            <tbody>
                            <tr>
                                <td>Email</td>
                                <td className="fw-medium">
                                miraoui.besma@gmail.com
                                </td>
                              </tr>
                              <tr>
                                <td>Etat de Compte</td>
                                <td className="fw-medium">
                                  <span className="badge badge-label bg-warning">
                                    <i className="mdi mdi-circle-medium"></i>{" "}
                                    Actif
                                  </span>
                                </td>
                              </tr>
                             
                             
                             
                            </tbody>
                          </Table>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
        
                                    
                                        <TableContainer
                                            columns={(columns || [])}
                                            data={(demandeEtudiant || [])}
                                            // isGlobalFilter={false}
                                            iscustomPageSize={false}
                                            isBordered={false}
                                            customPageSize={10}
                                            className="custom-header-css table align-middle table-nowrap"
                                            tableClass="table-centered align-middle table-nowrap mb-0"
                                            theadClass="text-muted table-light"
                                            SearchPlaceholder='Search Products...'
                                        />
                                        <div className="noresult" style={{ display: "none" }}>
                                            <div className="text-center">
                                                <h5 className="mt-2">Sorry! No Result Found</h5>
                                                <p className="text-muted mb-0">We've searched more than 150+ Orders We did not find any orders for you search.</p>
                                            </div>
                                        </div>
                                    
                                
                     
        </React.Fragment >
    );
};

export default DemandeTable;
          
           