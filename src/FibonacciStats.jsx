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
