import React, { PureComponent } from 'react';
import ReactEcharts from 'echarts-for-react';

export default class Sonar extends PureComponent {
  getOption = () => ({
    title: {
        text: 'Basic radar chart'
    },
    tooltip: {},
    legend: {
        data: ['Allocated Budget', 'Actual Spending']
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
           }
        },
        indicator: [
            { name: 'sales', max: 6500},
            { name: 'Administration', max: 16000},
            { name: 'Information Technology', max: 30000},
            { name: 'Customer Support', max: 38000},
            { name: 'Development', max: 52000},
            { name: 'Marketing', max: 25000}
        ]
    },
    series: [{
        name: 'Budget vs spending',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [4300, 10000, 28000, 35000, 50000, 19000],
                name : 'Allocated Budget'
            },
             {
                value : [5000, 14000, 28000, 31000, 42000, 21000],
                name : 'Actual Spending'
            }
        ]
    }]
})

  render() {
    return (
        <div className="x_panel">
            <div className="x_title">
                <h2> Sonar </h2>
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
