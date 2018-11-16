import React, { PureComponent } from 'react';
import ReactEcharts from 'echarts-for-react';

export default class HorizontalBar extends PureComponent {
  getOption = () => ({
    title: {
        Text: 'The total population of the world',
         Subtext: 'Data from the network'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['2011', '2012']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['Brazil', 'Indonesia', 'United States', 'India', 'China', 'World Population']
    },
    series: [
        {
            name: '2011',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230]
        },
        {
            name: '2012',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807]
        }
    ]
})

  render() {
    return (
        <div className="x_panel">
            <div className="x_title">
                <h2>Horizontal Bar  </h2>
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
