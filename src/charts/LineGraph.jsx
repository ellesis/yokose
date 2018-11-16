import React, { PureComponent } from 'react';
import ReactEcharts from 'echarts-for-react';

export default class LineGraph extends PureComponent {
  getOption = () => ({
    title: {
        text: 'Stacking area map'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['Mail Marketing', 'Union Advertising', 'Video Advertising', 'Direct Access', 'Search Engine']
    },
    toolbox: {
        show : false,
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'Email marketing',
            type:'line',
            stack: 'Total',
            areaStyle: {},
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'Alliance advertising',
            type:'line',
            stack: 'Total',
            areaStyle: {},
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'Video ad',
            type:'line',
            stack: 'Total',
            areaStyle: {},
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'Direct interview',
            type:'line',
            stack: 'Total',
            areaStyle: {normal: {}},
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'Search engine',
            type:'line',
            stack: 'Total',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
})

  render() {
    return (
        <div className="x_panel">
            <div className="x_title">
                <h2> Line Graph </h2>
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
