import React, { useState } from "react"
import { Toast, ToastContainer } from "react-bootstrap"
// import { shipSynopDeleteAction } from "../../actions/action.shipsynop"

const Toaster = ({expose, body}) => {

    // const { expose, body } = toasted
    const [show, setShow] = useState(expose)
    const toggleShow = () => setShow(!show)

    return (
        <ToastContainer className="p-3" position={'top-center'}>
            <Toast className="rounded me-2" bg="secondary" delay={8000} autohide show={show} onClose={toggleShow}>
                <Toast.Header>
                    {/* <img src="../" className="rounded me-2" alt="" /> */}
                    <strong className="me-auto">ShipSynop</strong>
                    <small>Gadelha TI</small>
                </Toast.Header>
                <Toast.Body className="text-white dark" >
                    {body}.
                    {/*<>
                        <Button className="btn btn-danger" size="sm" onClick={() => confirmDeleteItem(id)} >Delete</Button>
                    </> */}
                </Toast.Body>
            </Toast>
        </ToastContainer>
    )
}

export default Toaster