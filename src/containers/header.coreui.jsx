import React, { useState } from "react"
import { CNavbar, CNavbarBrand, CCollapse, CNavbarNav, CNavLink, CDropdownMenu, CDropdownItem, CToggler, CDropdown, CDropdownToggle } from "@coreui/react"
import { getUser, getUserName, removeToken } from "../services/service.token"

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <CNavbar expandable="sm" color="dark" >
                <CToggler inNavbar onClick={() => setIsOpen(!isOpen)} />
                <CNavbarBrand href="/observation/#/dashboard">ShipSynop</CNavbarBrand>
                <CCollapse show={isOpen} navbar>
                    <CNavbarNav>
                        <CNavLink href="/observation/#/dashboard">Dashboard</CNavLink>
                        {getUser("user") && (
                            <>
                                <CNavLink href="/observation/#/item">Item</CNavLink>
                                <CNavLink href="/observation/#/land">Land</CNavLink>
                                <CNavLink href="/observation/#/upload">Upload</CNavLink>
                            </>
                        )}
                    </CNavbarNav>
                    <CNavbarNav className="ml-auto">
                        {/* <CForm inline>
                            <CInput className="mr-sm-2" placeholder="Search" size="sm"/>
                            <CButton color="light" className="my-2 my-sm-0" type="submit">Search</CButton>
                        </CForm> */}
                        {getUser("user") ? (
                            <>
                                <CDropdown inNav>
                                    <CDropdownToggle color="primary">{getUserName("user")}</CDropdownToggle>
                                    <CDropdownMenu>
                                        <CDropdownItem href="/observation/#/profile">Profile</CDropdownItem>
                                        <CDropdownItem href="/observation/#/signup">Sign Up</CDropdownItem>
                                        <CDropdownItem href="/observation/#/signin" onClick={() => removeToken()}>LogOut</CDropdownItem>
                                    </CDropdownMenu>
                                </CDropdown>
                            </>
                        ) : (
                            <CNavLink href="/observation/#/signin">Signin</CNavLink>
                        )}
                    </CNavbarNav>
                </CCollapse>
            </CNavbar>
        </div>
    )
}