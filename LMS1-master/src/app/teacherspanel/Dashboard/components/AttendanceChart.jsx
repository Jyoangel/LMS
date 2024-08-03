import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { useState, useEffect } from 'react';

// Register all necessary components
Chart.register(...registerables);

export default function AttendanceChart({ labels, classData = [], colors }) {
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        if (Array.isArray(classData) && classData.length > 0) {
            const data = labels.map((month) => {
                const monthData = classData.find((item) => item.month === month);
                return monthData ? monthData.attendance : 0;
            });

            setChartData({
                labels: labels,
                datasets: [
                    {
                        label: 'Attendance',
                        data: data,
                        backgroundColor: colors[0], // Assuming a single dataset
                    },
                ],
            });
        }
    }, [classData, labels, colors]);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            },
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Number of Days Attended',
                },
            },
        },
    };

    if (!chartData || !chartData.datasets) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Bar data={chartData} options={options} />
        </div>
    );
}