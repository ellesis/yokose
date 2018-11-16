import React, { PureComponent } from 'react';
import ReactEcharts from 'echarts-for-react';

export default class Gauge extends PureComponent {
  getOption = () => ({
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: 'Business indicator',
            type: 'gauge',
            detail: {formatter:'{value}%'},
            data: [{value: 50, name: 'Completion rate'
        }]
        }
    ]
})

  render() {
    return (
        <div className="x_panel">
            <div className="x_title">
                <h2>Gauge  </h2>
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
