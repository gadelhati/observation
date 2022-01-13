import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { CHeader, CHeaderNav, CNavbarNav, CNavLink, CDropdownMenu, CDropdownItem, CToggler, CHeaderBrand, CDropdown, CDropdownToggle } from "@coreui/react"
import CIcon from "@coreui/icons-react"
import { getUser, getUserName, removeToken } from "../services/service.token"

export const Header = () => {
    // const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch()
    const sidebarShow = useSelector(state => state.sidebarShow)

    const toggleSidebar = () => {
        const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
        dispatch({ type: 'set', sidebarShow: val })
    }

    const toggleSidebarMobile = () => {
        const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
        dispatch({ type: 'set', sidebarShow: val })
    }

    return (
        <CHeader>
            <CToggler inHeader className="ml-md-3 d-lg-none" onClick={toggleSidebarMobile} />
            <CToggler inHeader className="ml-3 d-md-down-none" onClick={toggleSidebar} />
            {/* <CHeaderBrand className="mx-auto d-lg-none" to="/">
                <CIcon name="logo" height="48" alt="Logo"/>
            </CHeaderBrand> */}
            <CHeaderNav className="d-md-down-none mr-auto" >
            {/* <CNavbar expandable="sm" > */}
                {/* <CToggler inNavbar onClick={() => setIsOpen(!isOpen)} /> */}
                {/* <CNavbarBrand href="/observation/#/dashboard">ShipSynop</CNavbarBrand> */}
                {/* <CCollapse show={isOpen} navbar> */}
                    {/* <CNavbarNav>
                        <CNavLink href="/observation/#/dashboard">Observations</CNavLink>
                        {getUser("user") && (
                            <>
                                <CNavLink href="/observation/#/item">Item</CNavLink>
                                <CNavLink href="/observation/#/upload">Upload</CNavLink>
                                <CNavLink href="/observation/#/land">Land</CNavLink>
                            </>
                        )}
                    </CNavbarNav> */}
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
                {/* </CCollapse> */}
            {/* </CNavbar> */}
            </CHeaderNav>
        </CHeader>
    )
}