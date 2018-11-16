import React, { PureComponent } from 'react';
import ReactEcharts from 'echarts-for-react';

export default class Bar extends PureComponent {
  getOption = () => ({

    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['aaa','bbb']
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'sales',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            markPoint : {
                data : [
                    {type : 'max', name: 'Max'},
                    {type : 'min', name: 'Min'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: 'average'}
                ]
            }
        },
        {
            name:'purchases',
            type:'bar',
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            markPoint : {
                data : [
                    {name : 'Highest year', value : 182.2, xAxis: 7, yAxis: 183},
                    {name : 'Minimum year', value : 2.3, xAxis: 11, yAxis: 3}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : 'average'}
                ]
            }
        }
    ]
})

  render() {
    return (
      <div className="x_panel">
        <div className="x_title">
            <h2>Bar Graph</h2>
       
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
