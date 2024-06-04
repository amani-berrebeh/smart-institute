import React from 'react';
import { Card, Col, Dropdown, Row, Table } from 'react-bootstrap';
import Acitivity from './Activity';
import RecentOrders from './ProfilEtudiant';
import { Link } from 'react-router-dom';

// Import Images
import img1 from 'assets/images/users/avatar-1.jpg'

const Profile = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={12}>
                    {/* <RecentOrders /> */}
                </Col>

                <Col xxl={3}>
                    {/* <Acitivity /> */}
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Profile;