import React, { Component } from "react"
import { Provider } from "react-redux"

import "bootstrap/dist/css/bootstrap.min.css"
import "@coreui/coreui/dist/css/coreui.min.css"
import "./App.css"

import store from "./store/store"
import { Sidebar } from "./containers/sidebar"
import { Lista } from "./components/shipsynop/shipsynop.list.coreui"
import { Header } from "./containers/header.coreui"
import { Routes } from "./routes/routes"
import { Footer } from "./containers/footer"
import { CRow, CCol } from "@coreui/react"

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div className="c-app c-default-layout">
            <Sidebar/>
            <div className="c-wrapper">
              <Header />
              <div className="c-body">
                {/* <Lista /> */}
                <Routes />
              </div>
              <Footer />
            </div>
          </div>
        </Provider>
    );
  }
}

export default App;