"use client";
// components/InteractiveGraph.js
// Import required components and libraries
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PerformanceChart = ({ studentData, selectedStudent }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Destroy the previous chart instance if it exists
    if (window.myChart instanceof Chart) {
      window.myChart.destroy();
    }

    window.myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: `${studentData[selectedStudent]?.name}`,
          data: studentData[selectedStudent]?.scores,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }, [selectedStudent, studentData]);

  return <canvas ref={chartRef}></canvas>;
}

export default PerformanceChart;
{/*
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
//  graph
const InteractiveGraph = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        // label: "Dataset 1",
        data: [20, 40, 50, 60, 70, 75, 80, 85, 90, 95, 93, 95],
        borderColor: "#ADFF2F",
        backgroundColor: "#ADFF2F",
        tension: 0.4,
      },
      {
        // label: "Dataset 2",
        data: [10, 25, 35, 45, 55, 60, 65, 70, 80, 85, 87, 89],
        borderColor: "#FF00FF",
        backgroundColor: "#FF00FF",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#000000", // Change legend text color to black
        },
      },
      title: {
        display: true,
        text: "Interactive Graph",
        color: "#000000", // Change title color to black
      },
    },
    scales: {
      x: {
        grid: {
          color: "#d2d2d2",
        },
        ticks: {
          color: "#000000", // Change x-axis tick color to black
        },
      },
      y: {
        grid: {
          color: "#d2d2d2",
        },
        ticks: {
          color: "#000000", // Change y-axis tick color to black
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default InteractiveGraph;
*/}
