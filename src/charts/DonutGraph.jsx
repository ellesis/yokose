import React, { PureComponent } from 'react';
import ReactEcharts from 'echarts-for-react';

export default class DonutGraph extends PureComponent {
  getOption = () => ({
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['Direct access', 'mail marketing', 'alliance advertising', 'video advertising', 'search engine']
    },
    series: [
        {
            name:'Access source',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name: 'direct access'},
                 {value:310, name: 'mail marketing'},
                 {value:234, name: 'Union ad'},
                 {value:135, name: 'video ad'},
                 {value:1548, name:'Search Engine'}
            ]
        }
    ]
})

  render() {
    return (
        <div className="x_panel">
            <div className="x_title">
                <h2>Donut Graph  </h2>
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
