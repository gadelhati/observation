import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { CSidebar, CSidebarNav, CNavTitle, CNavItem, CNavGroup, CSidebarToggler, CSidebarBrand } from "@coreui/react"
import CIcon from "@coreui/icons-react"
import { cilListRich, cilTag, cilCloudUpload, cilLocationPin } from '@coreui/icons';

export const Sidebar = () => {
    const dispatch = useDispatch()
    const show = useSelector(state => state.sidebarShow)

    return (
        <CSidebar colorScheme="green" show={show} onShowChange={(val) => dispatch({type: 'set', sidebarShow: val})} >
            <CSidebarBrand>ShipSynop Web</CSidebarBrand>
            <CSidebarNav>
                <CNavTitle>Observation</CNavTitle>
                <CNavItem href="/observation/#/dashboard">
                    <CIcon customClassName="nav-icon" icon={cilListRich} />
                    Dashboard
                    {/* <CBadge color="primary ms-auto">NEW</CBadge> */}
                </CNavItem>
                <CNavItem href="/observation/#/item">
                    <CIcon customClassName="nav-icon" icon={cilTag} />
                    Item
                </CNavItem>
                <CNavItem href="/observation/#/upload">
                    <CIcon customClassName="nav-icon" icon={cilCloudUpload} />
                    Upload
                </CNavItem>
                <CNavGroup toggler="Dropdown">
                    <CNavItem href="/observation/#/land">
                        <CIcon customClassName="nav-icon" icon={cilLocationPin} /> Land
                    </CNavItem>
                </CNavGroup>
            </CSidebarNav>
            <CSidebarToggler />
            {/* <CSidebarMinimizer className="c-d-md-down-none"/> */}
        </CSidebar>
    )
}