import Chart from 'chart.js';
import React, {useRef} from 'react';

const CovidChart = () => {

    const chartRef = useRef(null)

    return(
        <div>
            <canvas ref={chartRef} id="myChart" width="400" height="400"></canvas>
        </div>
    )
};

export default CovidChart;