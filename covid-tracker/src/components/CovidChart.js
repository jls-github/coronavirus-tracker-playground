import Chart from 'chart.js';
import React, {useRef} from 'react';

const CovidChart = (cases, tests) => {

    const chartRef = useRef(null)

    cases = cases ? cases : 7
    tests = tests ? tests : 5

    const chart = new Chart(chartRef, {
        type: "bar",
        data: {
            labels: ['Cases', 'Tests'],
            datasets: [{
                label: "Total",
                data: [cases, tests],
                backgroundColor: ["red", "blue"]
            }]
        }
    })

    return(
        <div>
            <canvas ref={chartRef} id="myChart" width="400" height="400"></canvas>
        </div>
    )
};

export default CovidChart;