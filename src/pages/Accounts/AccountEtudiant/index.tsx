import React from 'react';
import { Container } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';

import RecentOrders from './ProfilEtudiant';

const MyAccount = () => {

    document.title = "My Account | Toner eCommerce + Admin React Template";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="Profil étudiant" pageTitle="Profils" />
                    <RecentOrders />
                </Container>
            </div>
        </React.Fragment>
    );
};

export default MyAccount;