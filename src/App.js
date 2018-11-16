import React, { Component } from 'react'
import './App.css'

import SiteInfo from './components/SiteInfo'
import Sidemenu from './components/Sidemenu'
import FooterLeft from './components/FooterLeft'
import Topbar from './components/Topbar'
import Footer from './components/Footer'

import MainCharts from './pages/MainCharts'

class App extends Component {
  render() {
    return (
      <div className="container body">
        <div className="main_container">

          <div className="col-md-3 left_col">
            <div className="left_col scroll-view">
              <SiteInfo />
              <Sidemenu />
              <FooterLeft />
            </div>
          </div>

          <div >
            <Topbar />
            <MainCharts />
            <Footer />
          </div>

        </div>
      </div>
    )
  }
}

export default App
