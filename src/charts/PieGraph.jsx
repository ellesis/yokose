import React, { PureComponent } from 'react';
import ReactEcharts from 'echarts-for-react';

export default class PieGraph extends PureComponent {
  getOption = () => ({
    title : {
        Text: 'A site user access source',
         Subtext: 'purely fictitious',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Direct access', 'mail marketing', 'alliance advertising', 'video advertising', 'search engine']
    },
    series : [
        {
            name: 'Access source',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name: 'direct access'},
                 {value:310, name: 'mail marketing'},
                 {value:234, name: 'Union ad'},
                 {value:135, name: 'video ad'},
                 {value:1548, name:'Search Engine'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
})

  render() {
    return (
        <div className="x_panel">
            <div className="x_title">
                <h2>Pie Graph</h2>
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
