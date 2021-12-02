import React from 'react'
import { Card } from "react-bootstrap";

import Expirated from '../../helpers/expiretad';
import TokenService from "../../services/service.token"

export const Profile = (props) => {

    return (
        <Card>
            <Card.Body>
                {TokenService.getUser("user") ?
                    <div className="container">
                        <p><strong>Profile: </strong> {TokenService.getUserName("user")}</p>
                        <p><strong>Token: </strong> {TokenService.getLocalAccessToken("user")}</p>
                        <p><strong>Id: </strong> {TokenService.getId("user")}</p>
                        <p><strong>Email: </strong> {TokenService.getEmail("user")}</p>
                        <strong>Authorities: </strong> {TokenService.getUser().roles.map((role, index) => <li key={index}>{role}</li>)}
                    </div>
                    :
                    <Expirated />
                }
            </Card.Body>
        </Card>
    );
}