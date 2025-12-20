import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { getBrandStats } from '../api/reviewApi';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const TopBrandsChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getBrandStats().then(res => setData(res.data));
    }, []);

    const chartData = {
        labels: data.map(d => d._id), // Brand name từ group by
        datasets: [{
            data: data.map(d => d.totalCount),
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        }]
    };

    return (
        <div className="chart-container" style={{ width: '400px' }}>
            <h3>Top 5 Thương hiệu</h3>
            <Pie data={chartData} />
        </div>
    );
};

export default TopBrandsChart;