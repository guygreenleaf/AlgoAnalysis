import React, { useState, useEffect } from "react";
import {Scatter} from "react-chartjs-2";

function FibonacciStats() {
  const [chartData, setChartData] = useState({});
  let [computation, compute] = useState([]);
  let [fiboToCompute, changeNum] = useState(0);


  
  let fibo = (number) => {
    if (number < 2) {
      return number;
    }

    return fibo(number - 1) + fibo(number - 2);
  };

  // useEffect(() => {
  //   let fillArray = () => {
  //     for (let index = 0; index < 15; index++) {
  //       const element = array[index];
        
  //     }
  //     compute([
  //       ...fibo()
  //     ])
  //   }
  // }, [])
  // var myChart = new Chart('myChart', {
  //   type: 'scatter',
  //   data: {
  //     datasets: [{
  //       label: 'My Dataset',
  //       data: [
  //         { x: "05:22", y: 12 },
  //         { x: "12:13", y: 19 },
  //         { x: "13:45", y: 3 },
  //         { x: "18:31", y: 5 },
  //         { x: "19:05", y: 2 },
  //         { x: "22:55", y: 3 }
  //       ],
  //       backgroundColor: [
  //         'rgba(255, 99, 132, 0.2)',
  //         'rgba(54, 162, 235, 0.2)',
  //         'rgba(255, 206, 86, 0.2)',
  //         'rgba(75, 192, 192, 0.2)',
  //         'rgba(153, 102, 255, 0.2)',
  //         'rgba(255, 159, 64, 0.2)'
  //       ],
  //       borderColor: [
  //         'rgba(255,99,132,1)',
  //         'rgba(54, 162, 235, 1)',
  //         'rgba(255, 206, 86, 1)',
  //         'rgba(75, 192, 192, 1)',
  //         'rgba(153, 102, 255, 1)',
  //         'rgba(255, 159, 64, 1)'
  //       ],
  //       pointRadius: 8,
  //       pointHoverRadius: 8
  //     }]
  //   },
  //   options: {
  //     responsive: true,
  //     legend: {
  //         display: false
  //     },
  //     scales: {      
  //       xAxes: [{     
  //         type: 'time',
  //         time: {
  //           parser: 'HH:mm',
  //           unit: 'hour',
  //           stepSize: 1,
  //           displayFormats: {
  //             hour: 'HH:mm'   
  //           },          
  //           tooltipFormat: 'HH:mm'          
  //         },
  //         ticks: {
  //           min: '00:00',
  //           max: '24:00',
  //           callback: (value, index) => index == 24 ? '24:00' : value
  //         }
  //       }],
  //       yAxes: [{
  //         ticks: {
  //           beginAtZero: true,
  //           stepSize: 5
  //         }
  //       }]
  //     }
  //   }
  // });
  const data = {
    labels: ['Scatter'],
    datasets: [
      {
        label: 'Fibonacci Asymptotic Complexity',
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 10,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        pointHitRadius: 10,
        data: [
          { x: 2, y: fibo(2) },
          { x: 8, y: fibo(8) },
          { x: 10, y: fibo(10) },
          { x: 12, y: fibo(12) },
          { x: 14, y: fibo(14) },
          { x: 16, y: fibo(16) }
        ]
      }
    ]
  }
  

  const chart = () => {
    setChartData({
      type: "scatter",
      labels: ["A(2)", "A(8)", "A(10)", "A(12)", "A(14)", "A(16)"],
      datasets: [
        {
          label: "Fibonacci Asymptotic Complexity",
          data: [fibo(2), fibo(8), fibo(10), fibo(12), fibo(14), fibo(16)],
          backgroundColor: ["rgba(75, 100, 192, 0.6)"],
          borderWidth: 4,
        },
      ],
    });
  };

  // useEffect(() => {
  //   chart();
  // }, []);
  return (
    <div style={{ marginLeft: "30vw", paddingTop: "20vh" }}>
      <div style={{ position: "relative", backgroundColor: "white", height: "500px", width:"900px" }}>
        <Scatter data={data} />
      </div>
    </div>
  );
}

export default FibonacciStats;
