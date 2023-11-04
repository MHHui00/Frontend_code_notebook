import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

const BarChart = ({Title}) => {
    const chartRef = useRef(null)   //review useRef: react裡獲取dom元素的方法
    useEffect(() => {
        //獲取渲染目標dom
        const chartDom = chartRef.current;  //review ref.current
        //初始化，生成實例對象
        const myChart = echarts.init(chartDom);
        //配置內容
        const option = {
            title: {
                text: Title
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [120, 200, 150, 80],
                    type: 'bar'
                }
            ]
        };

        option && myChart.setOption(option);
    })
    return <div
            style={{ width: '500px', height: '500px' }} //dom必須要有寬高
            ref={chartRef}
            >
            </div>
}

export default BarChart;