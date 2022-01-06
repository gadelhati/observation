import React from "react"
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap"
import { getUser, getUserName, removeToken } from "../services/service.token"

export const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/#/observation">Ship Synop</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/#/dashboard">Dashboard</Nav.Link>
                        {getUser("user") && (
                            <>
                                <Nav.Link href="/#/item">Item</Nav.Link>
                                <Nav.Link href="/#/land">Land</Nav.Link>
                                <Nav.Link href="/#/upload">Upload</Nav.Link>
                            </>
                        )}
                    </Nav>
                    <Nav>
                        {getUser("user") ? (
                            <>
                                <NavDropdown title={getUserName("user")} id="nav-dropdown">
                                    <NavDropdown.Item href="/#/profile">Profile</NavDropdown.Item>
                                    <NavDropdown.Item href="/#/signup">Sign Up</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/#/signin" onClick={() => removeToken()}>LogOut</NavDropdown.Item>
                                </NavDropdown>
                            </>
                        ) : (
                            <>
                                <Nav.Link href="/#/signin">Signin</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}