import React, { Component } from 'react'
import './App.css'



import UserPanel from './components/UserPanel'
import Sidemenu from './components/Sidemenu'
import RightMenuFooter from './components/RightMenuFooter'
import Topbar from './components/Topbar'
import Main from './components/Main'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="container body">
        <div className="main_container">
          <div className="col-md-3 left_col">
            <div className="left_col scroll-view">
              <UserPanel />

              <Sidemenu />
              <RightMenuFooter />
            </div>
          </div>

          <div >
            <Topbar />
            <Main />
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}

export default App
