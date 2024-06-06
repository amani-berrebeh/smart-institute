import React, { useState, useMemo, useCallback } from 'react';
import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import CountUp from 'react-countup';
import TableContainer from "Common/TableContainer";
import { demandeEtudiant } from "Common/data/demandeEtudiant";
import Flatpickr from "react-flatpickr";
import dummyImg from "../../assets/images/users/user-dummy-img.jpg"
import { Link } from 'react-router-dom';

const ListeReclamationEnseignant = () => {
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
            // {
            //     Header: (<div className="form-check">
            //         <input className="form-check-input" type="checkbox" id="checkAll" onClick={() => checkedAll()} />
            //     </div>),
            //     Cell: (cellProps: any) => {
            //         return (
            //             <div className="form-check">
            //                 <input className="userCheckBox form-check-input" type="checkbox" name="chk_child" value={cellProps.row.original.id} onChange={() => checkedbox()} />
            //             </div>
            //         );
            //     },
            //     id: '#',
            // },
            // {
            //     Header: "Type",
            //     accessor: "type",
            //     disableFilters: true,
            //     filterable: true,
            // },
            {
                Header: "Réclamation",
                accessor: "soustype",
                disableFilters: true,
                filterable: true,
            },
           
            {
                Header: "Enseignant",
                accessor: "etudiant",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "CIN",
                accessor: "CIN",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Classe",
                accessor: "classe",
                disableFilters: true,
                filterable: true,
            },
            {
                     Header: "Date d'envoi",
                     accessor: "date",
                     disableFilters: true,
                     filterable: true,
                 },
                 {
                    Header: "Date d'exécution",
                    accessor: "",
                    disableFilters: true,
                    filterable: true,
                },
            // {
            //     Header: "Image",
            //     disableFilters: true,
            //     filterable: true,
            //     accessor: (cellProps: any) => {
            //         return (<div className="d-flex align-items-center gap-2">
            //             <div className="flex-shrink-0">
            //                 <img src={cellProps.user_img} alt="" className="avatar-xs rounded-circle user-profile-img" />
            //             </div>
            //             {/* <div className="flex-grow-1 ms-2 user_name">{cellProps.user_name}</div> */}
            //         </div>)
            //     }
            // },

           
            // {
            //     Header: "Titre",
            //     accessor: "title",
            //     disableFilters: true,
            //     filterable: true,
            // },
            // {
            //     Header: "Description",
            //     accessor: "",
            //     disableFilters: true,
            //     filterable: true,
            // },
            // {
            //     Header: "Date",
            //     accessor: "",
            //     disableFilters: true,
            //     filterable: true,
            // },
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
                  to="/SingleReclamationEnseignant"
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
                  to="/EditReclamation"
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
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="Réclamation Etudiant" pageTitle="Liste des réclamations" />

                  

                    <Row id="usersList">
                        <Col lg={12}>
                            <Card>
                                <Card.Body>
                                    <Row className="g-lg-2 g-4">
                                        <Col lg={3}>
                                            <div className="search-box">
                                                <input type="text" className="form-control search" placeholder="Chercher une demande..." />
                                                <i className="ri-search-line search-icon"></i>
                                            </div>
                                        </Col>

                                        {isMultiDeleteButton && <Button variant="danger" className="btn-icon"><i className="ri-delete-bin-2-line"></i></Button>}

                                        {/* <Col sm={3} className="col-lg-auto ms-auto">
                                            <Button onClick={() => tog_AddUserModals()} variant='primary' type="button" className="w-100 add-btn">
                                                Add User
                                            </Button>
                                        </Col> */}
                                        {/* <Col sm={9} className="col-lg-auto">
                                            <select className="form-select" data-choices data-choices-search-false name="choices-single-default" id="idStatus">
                                                <option value="all">Tous</option>
                                                <option value="Today">Today</option>
                                                <option value="Yesterday">Yesterday</option>
                                                <option value="Last 7 Days">Last 7 Days</option>
                                                <option value="Last 30 Days">Last 30 Days</option>
                                                <option defaultValue="This Month">This Month</option>
                                                <option value="Last Month">Last Month</option>
                                            </select>
                                        </Col> */}
                                    </Row>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Body className='p-0'>
                                    
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
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Modal className="fade" show={modal_AddUserModals} onHide={() => { tog_AddUserModals(); }} centered>
                        <Modal.Header className="px-4 pt-4" closeButton>
                            <h5 className="modal-title" id="exampleModalLabel">Add User</h5>
                        </Modal.Header>
                        <Form className="tablelist-form">
                            <Modal.Body className="p-4">
                                <div id="alert-error-msg" className="d-none alert alert-danger py-2"></div>
                                <input type="hidden" id="id-field" />

                                <div className="text-center">
                                    <div className="position-relative d-inline-block">
                                        <div className="position-absolute  bottom-0 end-0">
                                            <label htmlFor="customer-image-input" className="mb-0" data-bs-toggle="tooltip" data-bs-placement="right" title="Select Image">
                                                <div className="avatar-xs cursor-pointer">
                                                    <div className="avatar-title bg-light border rounded-circle text-muted">
                                                        <i className="ri-image-fill"></i>
                                                    </div>
                                                </div>
                                            </label>
                                            <Form.Control className="d-none" defaultValue="" id="users-image-input" type="file" accept="image/png, image/gif, image/jpeg" />
                                        </div>
                                        <div className="avatar-lg p-1">
                                            <div className="avatar-title bg-light rounded-circle">
                                                <img src={dummyImg} alt="dummyImg" id="users-img-field" className="avatar-md rounded-circle object-cover" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <Form.Label htmlFor="user-name">User Name</Form.Label>
                                    <Form.Control type="text" id="user-name-field" placeholder="Enter Name" required />
                                </div>
                                <div className="mb-3">
                                    <Form.Label htmlFor="email-field">User Email</Form.Label>
                                    <Form.Control type="email" id="email-field" placeholder="Enter Email" required />
                                </div>

                                <div className="mb-3">
                                    <Form.Label htmlFor="date-field">Date</Form.Label>
                                    <Flatpickr
                                        className="form-control flatpickr-input"
                                        placeholder='Select Date'
                                        options={{
                                            mode: "range",
                                            dateFormat: "d M, Y",
                                        }}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="account-status" className="form-label">Account Status</label>
                                    <select className="form-select" required id="account-status-field">
                                        <option defaultValue="">Account Status</option>
                                        <option value="Active">Active</option>
                                        <option value="Inactive">inactive</option>
                                    </select>
                                </div>
                            </Modal.Body>
                            <div className="modal-footer">
                                <div className="hstack gap-2 justify-content-end">
                                    <Button className="btn-ghost-danger" onClick={() => { tog_AddUserModals(); }}>Close</Button>
                                    <Button variant='success' id="add-btn">Add User</Button>
                                </div>
                            </div>
                        </Form>
                    </Modal>

                </Container >
                
            </div >
        </React.Fragment >
    );
};

export default ListeReclamationEnseignant;