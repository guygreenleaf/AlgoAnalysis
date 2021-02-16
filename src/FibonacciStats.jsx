import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

function FibonacciStats() {
  const [chartData, setChartData] = useState({});
  const chart = () => {
    setChartData({
      labels: ["n=1", "n=3", "n=7", "n=8", "n=9"],
      datasets: [
        {
          label: "Fibonacci Asymptotic Complexity",
          data: [12, 24, 36, 48, 56],
          backgroundColor: ["rgba(75, 100, 192, 0.6)"],
          borderWidth: 4,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div style={{ marginLeft: "30vw", paddingTop: "20vh" }}>
      <div style={{ position: "relative", backgroundColor: "white", height: "500px", width:"900px" }}>
        <Line data={chartData} options={{responsive: true}} />
      </div>
    </div>
  );
}

export default FibonacciStats;
