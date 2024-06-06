import React from 'react';
import { Container } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';

import RecentOrders from './ProfilEnseignant';

const AccountEnseignant = () => {

    document.title = "Compte Enseignant | Smart University";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="Profil enseignant" pageTitle="Profils" />
                    <RecentOrders />
                </Container>
            </div>
        </React.Fragment>
    );
};

export default AccountEnseignant;