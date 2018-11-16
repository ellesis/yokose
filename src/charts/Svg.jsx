import React, { PureComponent } from 'react';
import ReactEcharts from 'echarts-for-react';

export default class Svg extends PureComponent {
  getOption = () => ({
    title: {
      text: 'ECharts bar'
    },
    tooltip: {},
    legend: {
      data:['legend data']
    },
    xAxis: {
      data: ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff']
    },
    yAxis: {},
    series: [{
      name: 'lisa name',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }]
  })

  render() {
    return (
        <div className="x_panel">
            <div className="x_title">
                <h2>SVG chart</h2>
            </div>
            <div className="x_content">
                <ReactEcharts
                option={this.getOption()}
                style={{height: '400px', width: '100%'}}
                opts={{ renderer: 'svg' }}                
                theme = {'light'}
                />
            </div>
        </div>
    );
  }  
}
