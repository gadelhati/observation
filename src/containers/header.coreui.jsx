import React from "react"
import { useState } from "react"
import { CContainer, CNavLink, CNavbarNav, CNavItem, CNav, CDropdown, CDropdownItem, CNavbarBrand, CNavbarToggler, CCollapse, CDropdownDivider } from "@coreui/react"
import { getUser, getUserName, removeToken } from "../services/service.token"
import { CNavbar } from "@coreui/react"

export const Header = () => {
    const [visible, setVisible] = useState(false)
    return (
        <CNavbar expand="lg" colorScheme="light" className="bg-light" placement="sticky-top" >
            <CContainer fluid>
                <CNavbarBrand href="/observation/#/observation">Ship Synop</CNavbarBrand>
                {/* <CNavbarToggle aria-controls="responsive-navbar-nav" /> */}
                <CNavbarToggler onClick={() => setVisible(!visible)} />
                <CCollapse className="navbar-collapse" visible={visible}>
                    <CNavbarNav>
                        <CNavItem><CNavLink href="/observation/#/dashboard">Dashboard</CNavLink></CNavItem>
                        {getUser("user") && (
                            <>
                                <CNavItem><CNavLink href="/observation/#/item">Item</CNavLink></CNavItem>
                                <CNavItem><CNavLink href="/observation/#/land">Land</CNavLink></CNavItem>
                                <CNavItem><CNavLink href="/observation/#/upload">Upload</CNavLink></CNavItem>
                            </>
                        )}
                    </CNavbarNav>
                    <CNav>
                        {getUser("user") ? (
                            <>
                                <CDropdown title={getUserName("user")} id="nav-dropdown">
                                    <CDropdownItem href="/observation/#/profile">Profile</CDropdownItem>
                                    <CDropdownItem href="/observation/#/signup">Sign Up</CDropdownItem>
                                    <CDropdownDivider />
                                    <CDropdownItem href="/observation/#/signin" onClick={() => removeToken()}>LogOut</CDropdownItem>
                                </CDropdown>
                            </>
                        ) : (
                            <>
                                <CNavLink href="/observation/#/signin">Signin</CNavLink>
                            </>
                        )}
                    </CNav>
                </CCollapse>
            </CContainer>
        </CNavbar>
    )
}