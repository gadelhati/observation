import React from 'react'
import { Alert } from "react-bootstrap";

const Expirated = (props) => {

    return (
        <Alert variant="secondary">
            <Alert.Heading>Oops?!</Alert.Heading>
            Your section has expired please login again
            {' '}
            <Alert.Link href="\signin">Signin</Alert.Link>
        </Alert>
    );
}

export default Expirated;