import React, { Component } from 'react'

class UserPanel extends Component {
  render() {
    return (
      <div>
        <div className="navbar nav_title">
          <a href="index.html" className="site_title">
            <i className="fa fa-paw"></i> <span>Yokose</span>
          </a>
        </div>

        <div className="clearfix"></div>

        <div className="profile clearfix">
          <div className="profile_pic">
            <img src="images/img.jpg" alt="..." className="img-circle profile_img" />
          </div>
          <div className="profile_info">
            <span>Welcome,</span>
            <h2>John Doe</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default UserPanel