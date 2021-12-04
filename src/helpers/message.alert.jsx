import React, { useState } from "react"
import { Alert, Spinner } from "react-bootstrap"

export const Message = (props) => {
    const [setShow] = useState(false);

    return (
        <Alert variant="secondary" onClose={() => setShow(false)} >
            <Alert.Heading>{props.heading}</Alert.Heading>
            { props.heading === "Loading" ?
            <><Spinner animation="grow" size="sm" />{' '}Loading...</>
            :
            props.body
            }
        </Alert>
    )
}