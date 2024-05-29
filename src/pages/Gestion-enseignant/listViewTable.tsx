import React, { useMemo } from 'react';
import TableContainer from "Common/TableContainer";
import { sellerList } from "Common/data";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ListViewTable = () => {

    const columns = useMemo(
        () => [
            {
                Header: (<div className="form-check"> <input className="form-check-input" type="checkbox" id="checkAll" value="option" /> </div>),
                Cell: (cellProps: any) => {
                    return (<div className="form-check"> <input className="form-check-input" type="checkbox" name="chk_child" defaultValue="option1" /> </div>);
                },
                id: '#',
            },
            {
                Header: "Matricule",
                accessor: "itemStock",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Nom et Prénom",
                accessor: "sellerName",
                disableFilters: true,
                filterable: true,
            },
           
            {
                Header: "Spécialité",
                accessor: "balance",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Grade",
                accessor: "email",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Tél",
                accessor: "phone",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Date de Creation",
                accessor: "createDate",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Activation",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    switch (cellProps.status) {
                        case "Activé":
                            return (<span className="badge bg-success-subtle text-success text-uppercase"> {cellProps.status}</span>)
                        case "Desactivé":
                            return (<span className="badge bg-danger-subtle text-danger text-uppercase"> {cellProps.status}</span>)
                        default:
                            return (<span className="badge bg-success-subtle text-success text-uppercase"> {cellProps.status}</span>)
                    }
                },
            },
            {
                Header: "Action",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    return (
                        <div className="d-flex gap-2">
                            <div>
                                <Link to="/seller-overview" className="btn btn-sm btn-soft-secondary">Voir</Link>
                            </div>
                            <div className="edit">
                                <Link className="btn btn-sm btn-soft-info edit-item-btn" to="#showModal" data-bs-toggle="modal">Modifier</Link>
                            </div>
                            <div className="remove">
                                <Button variant='soft-danger' size="sm" className="remove-item-btn" data-bs-toggle="modal" data-bs-target="#deleteRecordModal">Supprimer</Button>
                            </div>
                        </div>
                    )
                },
            },
        ],
        []
    );

    return (
        <React.Fragment>
            <TableContainer
                columns={(columns || [])}
                data={(sellerList || [])}
                // isGlobalFilter={false}
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

export default ListViewTable;