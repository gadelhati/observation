import React from "react"
import { Card } from "react-bootstrap"

import { Message } from "../helpers/message.alert"
import { getUserName, getLocalAccessToken, getId, getEmail, getUser } from "../services/service.token"

export const Profile = (props) => {

    return (
        <Card>
            <Card.Body>
                {getUser("user") ?
                    <div className="container">
                        <p><strong>Profile: </strong> {getUserName("user")}</p>
                        <p><strong>Token: </strong> {getLocalAccessToken("user")}</p>
                        <p><strong>Id: </strong> {getId("user")}</p>
                        <p><strong>Email: </strong> {getEmail("user")}</p>
                        <strong>Authorities: </strong> {getUser().roles.map((role, index) => <li key={index}>{role}</li>)}
                    </div>
                    :
                    <Message />
                }
            </Card.Body>
        </Card>
    )
}