import React, { PureComponent } from 'react';
import ReactEcharts from 'echarts-for-react';

export default class PaiNest extends PureComponent {
  getOption = () => ({
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['Direct', 'Marketing Advertising', 'Search Engine', 'Mail Marketing', 'Union Advertising', 'Video Advertising', 'Baidu', 'Google', 'Bing', 'Other']
    },
    series: [
        {
            name:'Access source',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name: 'direct', selected: true},
                 {value:679, name: 'Marketing Advertising'},
                 {value:1548, name:'Search Engine'}
            ]
        },
        {
            name:'Access source',
            type:'pie',
            radius: ['40%', '55%'],
            label: {
                normal: {
                    formatter: '{b}:{c} ({d}%)  ',
                    backgroundColor: 'light grey',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    // padding: [0, 7],
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        // abg: {
                        //     backgroundColor: '#333',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data:[
                {value:335, name: 'direct'},
                 {value:310, name: 'mail marketing'},
                 {value:234, name: 'Union ad'},
                 {value:135, name: 'video ad'},
                 {value:1048, name: 'Baidu'},
                 {value:251, name:'Google'},
                 {value:147, name: 'Bing'},
                 {value:102, name:'Other'}
            ]
        }
    ]
})

  render() {
    return (
        <div className="x_panel">
            <div className="x_title">
                <h2>Pie Nest</h2>
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
