import React, { useMemo } from 'react';
import TableContainer from "Common/TableContainer";
import { accountTransaction } from "Common/data";
import { Card, Col, Row, Table } from 'react-bootstrap';
import img1 from "assets/images/users/avatar-1.jpg";


const ReclamationTable = () => {
    const columns = useMemo(
        () => [
            {
                Header: "Transaction ID",
                accessor: "TransactionID",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "From",
                accessor: "From",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "To",
                accessor: "To",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Timestamp",
                accessor: "Timestamp",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Payment Method",
                accessor: "PaymentMethod",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Amount",
                accessor: "Amount",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Status",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    switch (cellProps.Status) {
                        case "Success":
                            return (<span className="badge bg-success-subtle text-success text-uppercase"> {cellProps.Status}</span>)
                        case "Pending":
                            return (<span className="bg-warning-subtle text-uppercase"> {cellProps.Status}</span>)
                        case "Failed":
                            return (<span className="bg-danger-subtle text-uppercase"> {cellProps.Status}</span>)
                        default:
                            return (<span className="badge bg-success-subtle text-success text-uppercase"> {cellProps.Status}</span>)
                    }
                },
            },
        ],
        []
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
                data={(accountTransaction || [])}
                isGlobalFilter={false}
                iscustomPageSize={false}
                isBordered={false}
                customPageSize={10}
                className="custom-header-css table align-middle table-nowrap"
                tableClass="table-centered align-middle table-nowrap mb-0"
                theadClass="text-muted table-light"
                SearchPlaceholder='Search Products...'
            />
        </React.Fragment>
    );
};

export default ReclamationTable;