import React, { PureComponent } from 'react';
import ReactEcharts from 'echarts-for-react';

export default class Pyramid extends PureComponent {
  getOption = () => ({
    title: {
        Text: 'Funnel diagram',
        Subtext: 'purely fictitious'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        show : false,
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        data: ['Show', 'click', 'access', 'consult', 'order']
    },
    calculable: true,
    series: [
        {
            name:'漏斗图',
            type:'funnel',
            left: '10%',
            top: 60,
            //x2: 80,
            bottom: 60,
            width: '80%',
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                },
                emphasis: {
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            labelLine: {
                normal: {
                    length: 10,
                    lineStyle: {
                        width: 1,
                        type: 'solid'
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            },
            data: [
                {value: 60, name: 'access'},
                 {value: 40, name: 'consult'},
                 {value: 20, name: 'Order'},
                 {value: 80, name: 'click'},
                 {value: 100, name: 'presentation'}
            ]
        }
    ]
})

  render() {
    return (
        <div className="x_panel">
            <div className="x_title">
                <h2>Pyramid  </h2>
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
