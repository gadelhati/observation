import React, { Component } from "react"
import { Provider } from "react-redux"

import "bootstrap/dist/css/bootstrap.min.css"
import "@coreui/coreui/dist/css/coreui.min.css"
import "./App.css"

import store from "./store/store"
import { Sidebar } from "./containers/sidebar"
import { Header } from "./containers/header.coreui"
import { Routes } from "./routes/routes"
import { CRow, CCol } from "@coreui/react"

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <CRow>
              <CCol>
                <Header />
              </CCol>
            </CRow>
            <CRow>
              <CCol><Sidebar/></CCol>
              <CCol><Routes /></CCol>
            </CRow>
        </Provider>
    );
  }
}

export default App;