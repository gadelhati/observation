import React from "react"
import { CNavbar } from "@coreui/react"
import logo from "../assets/icons/brasao-chm.png"

export const Footer = () => {
    return (
        <CNavbar >
            <div>
                <a href="https://www.marinha.mil.br/" target="_blank" rel="noopener noreferrer">Marinha do Brasil</a>
                <span className="ml-1">&copy; Centro de Hidrografia da Marinha <span>{' '}</span>
                <img className="c-sidebar-brand-minimized"
                    alt="Marinha"
                    src={logo}
                    height={35}
                />
                </span>
            </div>
            <div className="mfs-auto">
                <span className="mr-1">Desenvolvido por</span>
                <a href="https://www.marinha.mil.br/chm/" target="_blank" rel="noopener noreferrer">Centro Local de Tecnologia da Informação da Ponta da Armação (CLTIPA)</a>
            </div>
        </CNavbar>
    )
}