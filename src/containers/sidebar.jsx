import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { CSidebar, CSidebarNav, CNavItem, CSidebarBrand } from "@coreui/react"
import CIcon from "@coreui/icons-react"
import { cilListRich, cilTag, cilCloudUpload, cilLocationPin } from '@coreui/icons';

export const Sidebar = () => {
    const dispatch = useDispatch()
    const show = useSelector(state => state.sidebarShow)

    return (
        <CSidebar colorScheme="green" show={show} onShowChange={(val) => dispatch({type: 'set', sidebarShow: val})} >
            <CSidebarBrand>ShipSynop Web</CSidebarBrand>
            <CSidebarNav>
                {/* <CNavTitle>Observation</CNavTitle> */}
                <CNavItem href="/observation/#/dashboard">
                    <CIcon size={'lg'} icon={cilListRich} />
                    Dashboard
                    {/* <CBadge color="primary ms-auto">NEW</CBadge> */}
                </CNavItem>
                <CNavItem href="/observation/#/item">
                    <CIcon icon={cilTag} />
                    Item
                </CNavItem>
                <CNavItem href="/observation/#/upload">
                    <CIcon icon={cilCloudUpload} />
                    Upload
                </CNavItem>
                {/* <CNavGroup toggler="Dropdown"> */}
                    <CNavItem href="/observation/#/land">
                        <CIcon size="sm" icon={cilLocationPin} /> Land
                    </CNavItem>
                {/* </CNavGroup> */}
            </CSidebarNav>
            <button class="sidebar-toggler" type="button"></button>
            {/* <CSidebarMinimizer className="c-d-md-down-none"/> */}
        </CSidebar>
    )
}