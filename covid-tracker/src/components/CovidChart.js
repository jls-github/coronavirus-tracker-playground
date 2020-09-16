import React from 'react';
import { Bar } from 'react-chartjs-2';

const CovidChart = ({cases, tests}) => {

    cases = cases ? cases : 7
    tests = tests ? tests : 5

    const labels = ["Cases", "Tests"]
    const datasets = [{
        label: "Total",
        data: [7, 10],
        backgroundColor: ["red", "green"]
    }]


    return(
        <div>
            <Bar 
            data={{labels: labels, datasets: datasets}}
            options={{
                title:{
                  display:true,
                  text:'Cases versus tests',
                  fontSize:20
                },
                legend:{
                  display:true,
                  position:'right'
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
              }} />
        </div>
    )
};

export default CovidChart;