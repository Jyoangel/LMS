"use client"
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';


const AttendanceChart = ({ attendanceData, selectedStudent }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: `${attendanceData[selectedStudent].name}'s Attendance`,
                    data: attendanceData[selectedStudent].monthlyAttendance,
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                    borderColor: 'rgba(53, 162, 235, 1)',
                    borderWidth: 1
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

        return () => {
            chart.destroy();
        };
    }, [attendanceData, selectedStudent]);

    return <canvas ref={chartRef}></canvas>;
};

export default AttendanceChart;
