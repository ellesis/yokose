import React, { Component } from 'react'

class Main extends Component {
  render() {
    return (
      <div className="right_col" role="main">
        <div className="">
          <div className="page-title">
            <div className="title_left">
              <h3>Echarts <small>Some examples to get you started</small></h3>
            </div>

            <div className="title_right">
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

          <div className="clearfix"></div>

          <div className="row">
            <div className="col-md-8 col-sm-8 col-xs-12">
              <div className="x_panel">
                <div className="x_title">
                  <h2>Bar Graph</h2>
                  <ul className="nav navbar-right panel_toolbox">
                    <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                      <ul className="dropdown-menu" role="menu">
                        <li><a href="#">Settings 1</a>
                        </li>
                        <li><a href="#">Settings 2</a>
                        </li>
                      </ul>
                    </li>
                    <li><a className="close-link"><i className="fa fa-close"></i></a>
                    </li>
                  </ul>
                  <div className="clearfix"></div>
                </div>
                <div className="x_content">

                  <div id="mainb" ></div>

                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="x_panel">
                <div className="x_title">
                  <h2>Mini Pie</h2>
                  <ul className="nav navbar-right panel_toolbox">
                    <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                      <ul className="dropdown-menu" role="menu">
                        <li><a href="#">Settings 1</a>
                        </li>
                        <li><a href="#">Settings 2</a>
                        </li>
                      </ul>
                    </li>
                    <li><a className="close-link"><i className="fa fa-close"></i></a>
                    </li>
                  </ul>
                  <div className="clearfix"></div>
                </div>
                <div className="x_content">

                  <div id="echart_mini_pie" ></div>

                </div>
              </div>
            </div>


            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="x_panel">
                <div className="x_title">
                  <h2>Pie Graph</h2>
                  <ul className="nav navbar-right panel_toolbox">
                    <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                      <ul className="dropdown-menu" role="menu">
                        <li><a href="#">Settings 1</a>
                        </li>
                        <li><a href="#">Settings 2</a>
                        </li>
                      </ul>
                    </li>
                    <li><a className="close-link"><i className="fa fa-close"></i></a>
                    </li>
                  </ul>
                  <div className="clearfix"></div>
                </div>
                <div className="x_content">

                  <div id="echart_pie"></div>

                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="x_panel">
                <div className="x_title">
                  <h2>Pie Area</h2>
                  <ul className="nav navbar-right panel_toolbox">
                    <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                      <ul className="dropdown-menu" role="menu">
                        <li><a href="#">Settings 1</a>
                        </li>
                        <li><a href="#">Settings 2</a>
                        </li>
                      </ul>
                    </li>
                    <li><a className="close-link"><i className="fa fa-close"></i></a>
                    </li>
                  </ul>
                  <div className="clearfix"></div>
                </div>
                <div className="x_content">

                  <div id="echart_pie2"></div>

                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="x_panel">
                <div className="x_title">
                  <h2>Donut Graph</h2>
                  <ul className="nav navbar-right panel_toolbox">
                    <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                      <ul className="dropdown-menu" role="menu">
                        <li><a href="#">Settings 1</a>
                        </li>
                        <li><a href="#">Settings 2</a>
                        </li>
                      </ul>
                    </li>
                    <li><a className="close-link"><i className="fa fa-close"></i></a>
                    </li>
                  </ul>
                  <div className="clearfix"></div>
                </div>
                <div className="x_content">

                  <div id="echart_donut"></div>

                </div>
              </div>
            </div>


            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="x_panel">
                <div className="x_title">
                  <h2>Scatter Graph</h2>
                  <ul className="nav navbar-right panel_toolbox">
                    <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                      <ul className="dropdown-menu" role="menu">
                        <li><a href="#">Settings 1</a>
                        </li>
                        <li><a href="#">Settings 2</a>
                        </li>
                      </ul>
                    </li>
                    <li><a className="close-link"><i className="fa fa-close"></i></a>
                    </li>
                  </ul>
                  <div className="clearfix"></div>
                </div>
                <div className="x_content">

                  <div id="echart_scatter"></div>

                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="x_panel">
                <div className="x_title">
                  <h2>Line Graph</h2>
                  <ul className="nav navbar-right panel_toolbox">
                    <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                      <ul className="dropdown-menu" role="menu">
                        <li><a href="#">Settings 1</a>
                        </li>
                        <li><a href="#">Settings 2</a>
                        </li>
                      </ul>
                    </li>
                    <li><a className="close-link"><i className="fa fa-close"></i></a>
                    </li>
                  </ul>
                  <div className="clearfix"></div>
                </div>
                <div className="x_content">

                  <div id="echart_line"></div>

                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="x_panel">
                <div className="x_title">
                  <h2>Horizontal Bar</h2>
                  <ul className="nav navbar-right panel_toolbox">
                    <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                      <ul className="dropdown-menu" role="menu">
                        <li><a href="#">Settings 1</a>
                        </li>
                        <li><a href="#">Settings 2</a>
                        </li>
                      </ul>
                    </li>
                    <li><a className="close-link"><i className="fa fa-close"></i></a>
                    </li>
                  </ul>
                  <div className="clearfix"></div>
                </div>
                <div className="x_content">

                  <div id="echart_bar_horizontal"></div>

                </div>
              </div>
            </div>

            <div className="col-md-8 col-sm-8 col-xs-12">
              <div className="x_panel">
                <div className="x_title">
                  <h2>World Map</h2>
                  <ul className="nav navbar-right panel_toolbox">
                    <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                      <ul className="dropdown-menu" role="menu">
                        <li><a href="#">Settings 1</a>
                        </li>
                        <li><a href="#">Settings 2</a>
                        </li>
                      </ul>
                    </li>
                    <li><a className="close-link"><i className="fa fa-close"></i></a>
                    </li>
                  </ul>
                  <div className="clearfix"></div>
                </div>
                <div className="x_content">

                  <div id="echart_world_map"></div>

                </div>
              </div>
            </div>


            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="x_panel">
                <div className="x_title">
                  <h2>Pyramid</h2>
                  <ul className="nav navbar-right panel_toolbox">
                    <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                      <ul className="dropdown-menu" role="menu">
                        <li><a href="#">Settings 1</a>
                        </li>
                        <li><a href="#">Settings 2</a>
                        </li>
                      </ul>
                    </li>
                    <li><a className="close-link"><i className="fa fa-close"></i></a>
                    </li>
                  </ul>
                  <div className="clearfix"></div>
                </div>
                <div className="x_content">

                  <div id="echart_pyramid"></div>

                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="x_panel">
                <div className="x_title">
                  <h2>Sonar</h2>
                  <ul className="nav navbar-right panel_toolbox">
                    <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                      <ul className="dropdown-menu" role="menu">
                        <li><a href="#">Settings 1</a>
                        </li>
                        <li><a href="#">Settings 2</a>
                        </li>
                      </ul>
                    </li>
                    <li><a className="close-link"><i className="fa fa-close"></i></a>
                    </li>
                  </ul>
                  <div className="clearfix"></div>
                </div>
                <div className="x_content">

                  <div id="echart_sonar"></div>

                </div>
              </div>
            </div>


            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="x_panel">
                <div className="x_title">
                  <h2>Gauge</h2>
                  <ul className="nav navbar-right panel_toolbox">
                    <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                      <ul className="dropdown-menu" role="menu">
                        <li><a href="#">Settings 1</a>
                        </li>
                        <li><a href="#">Settings 2</a>
                        </li>
                      </ul>
                    </li>
                    <li><a className="close-link"><i className="fa fa-close"></i></a>
                    </li>
                  </ul>
                  <div className="clearfix"></div>
                </div>
                <div className="x_content">
                  <div id="echart_gauge"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main