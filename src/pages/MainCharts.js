import React, { Component } from 'react'

import Bar from "../charts/Bar"
import PaiNest from "../charts/PaiNest"
import PieGraph from "../charts/PieGraph"
import PieArea from "../charts/PieArea"
import DonutGraph from "../charts/DonutGraph"
import ScatterGraph from "../charts/ScatterGraph"
import LineGraph from "../charts/LineGraph"
import HorizontalBar from "../charts/HorizontalBar"
import WorldMap from "../charts/WorldMap"
import Pyramid from "../charts/Pyramid"
import Sonar from "../charts/Sonar"
import Gauge from "../charts/Gauge"

class MainCharts extends Component {
  render() {
    return (
      <div className="right_col" role="main">      
          <div className="page-title">
            <div className="title_left">
              <h3>Echarts <small>Some examples to get you started</small></h3>
            </div>            

          </div>
        

          <div className="row">
            <div className="col-md-8 col-sm-8 col-xs-12">
             <Bar />
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <PaiNest />
            </div>

            
           
            <div className="col-md-4 col-sm-4 col-xs-12">
              <PieGraph />
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <PieArea />
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <DonutGraph />
            </div>

            
            
            <div className="col-md-6 col-sm-6 col-xs-12">
              <ScatterGraph />
            </div>

            <div className="col-md-6 col-sm-6 col-xs-12">
              <LineGraph />
            </div>
            
            <div className="col-md-4 col-sm-4 col-xs-12">
              <HorizontalBar />
            </div>
            <div className="col-md-8 col-sm-8 col-xs-12">
              <WorldMap />
            </div>

            <div className="col-md-4 col-sm-4 col-xs-12">
              <Pyramid />
            </div>

            <div className="col-md-4 col-sm-4 col-xs-12">
              <Sonar />
            </div>

            <div className="col-md-4 col-sm-4 col-xs-12">
              <Gauge />
            </div>
          </div>
  
       
      </div>
    )
  }
}

export default MainCharts