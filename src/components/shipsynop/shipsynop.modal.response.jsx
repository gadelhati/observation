import React, { useState, useEffect } from 'react'
import { Modal, Button } from "react-bootstrap";

const ShipSynopModalResponse = (props) => {

    const [state, setState] = useState(props);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setState(props);
    }, [props]);

    return (
        <>
            <Button variant="secondary" onClick={handleShow} > More </Button>
            <Modal size="lg" show={show} onHide={handleClose} centered backdrop="static" keyboard={false} >
                <Modal.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <small>ShipSynop</small>
                </Modal.Header>
                <Modal.Body >
                    {state}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClose}> Cancel </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ShipSynopModalResponse;