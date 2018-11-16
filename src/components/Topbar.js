import React, { Component } from 'react'

class Topbar extends Component {
  render() {
    return (
      <div className="top_nav">
        <div className="nav_menu">
          <nav>
            <div className="nav toggle">
              <a id="menu_toggle"><i className="fa fa-bars"></i></a>
            </div>
          </nav>

          <div className="Search-bar">
            <div className="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for..." />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">Go!</button>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Topbar