import React, { useState } from 'react'
import { Alert } from "react-bootstrap";

const Expirated = (props) => {
    const [setShow] = useState(false);

    return (
        <Alert variant="secondary" onClose={() => setShow(false)} >
            <Alert.Heading>{props.heading}</Alert.Heading>
            {props.body}
            {' '}
        </Alert>
    );
}

export default Expirated;