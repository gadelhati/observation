import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { CSidebar, CSidebarNav, CNavLink, CSidebarBrand, CSidebarMinimizer, CNavItem, CCreateElement, CSidebarNavTitle, CSidebarNavDropdown, CSidebarNavItem, CSidebarNavDivider } from "@coreui/react"
import CIcon from "@coreui/icons-react"
import { cilPeople, cilListRich, cilTag, cilCloudUpload, cilLocationPin } from '@coreui/icons';
import { getRoles, getUser } from "../services/service.token"
import { navigation } from "./navigation"
import bode from "../assets/icons/bodeVerde.svg"

import heraldica from "../assets/icons/brasao-chm.png"

export const Sidebar = () => {
    const dispatch = useDispatch()
    const show = useSelector(state => state.sidebarShow)

    const filterNav = () => {
        if (getUser()) {
            console.log(navigation.filter(nav => nav.requiredPermission === "".concat(...getRoles())))
            console.log(navigation[3].requiredPermission)
            console.log(navigation.filter(nav => nav.requiredPermission))
            return navigation.filter(nav => nav.requiredPermission.indexOf(...getRoles()) >= 0)
        } else {
            return navigation.filter(nav => nav.public)
        }
    }

    return (
        <CSidebar colorScheme="green" show={show} onShowChange={(val) => dispatch({ type: 'set', sidebarShow: val })} >
            <CSidebarBrand href="/observation/#/dashboard" className="d-md-down-none">
                <img className="c-sidebar-brand-full" alt="Centro de Hidrografia da Marinha" src={heraldica} height={40} />
                <img className="c-sidebar-brand-minimized" alt="Centro de Hidrografia da Marinha" src={bode} height={40} />
            </CSidebarBrand>
            <CSidebarNav>
                {/* <CCreateElement
                    items={
                        filterNav()
                    }
                    components={{
                        CSidebarNavDivider,
                        CSidebarNavDropdown,
                        CSidebarNavItem,
                        CSidebarNavTitle
                    }}
                /> */}
                <CNavLink href="/observation/#/dashboard" className="text-secondary"><CIcon class="w-25 p-3" icon={cilListRich} />Observations</CNavLink>
                {getUser("user") && (
                    <>
                        <CNavItem><CNavLink href="/observation/#/item" className="text-secondary"><CIcon class="w-25 p-3" icon={cilTag} />Item</CNavLink></CNavItem>
                        <CNavItem><CNavLink href="/observation/#/upload" className="text-secondary"><CIcon class="nav-icon w-25 p-3" icon={cilCloudUpload} />Upload</CNavLink></CNavItem>
                        {/* <CDropdown inNav >
                            <CDropdownToggle color="primary">Lang</CDropdownToggle>
                            <CDropdownMenu>
                                <CDropdownItem href="/observation/#/land"> */}
                        <CNavItem><CNavLink href="/observation/#/land" className="text-secondary"><CIcon class="w-25 p-3" icon={cilLocationPin} />Land</CNavLink></CNavItem>
                        {/* <CNavLink href="/observation/#/land" className="text-white bg-info px-2"><CIcon class="w-25 p-3" icon={cilLocationPin} />Land</CNavLink> */}
                        {/* </CDropdownItem>
                            </CDropdownMenu>
                        </CDropdown> */}
                    </>
                )}
                {getUser("user") ? <></> :
                    <CNavLink href="/observation/#/signin" className="text-secondary"><CIcon class="w-25 p-3" icon={cilPeople} />Signin</CNavLink>
                }
            </CSidebarNav>
            <CSidebarMinimizer className="c-d-md-down-none" />
        </CSidebar>
    )
}