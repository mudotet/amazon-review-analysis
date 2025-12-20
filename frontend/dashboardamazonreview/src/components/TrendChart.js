import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Đăng ký các thành phần cho biểu đồ Đường (Line)
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const TrendChart = ({ asin }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (asin) {
            axios.get(`http://localhost:8080/api/v1/stats/trend/${asin}`)
                .then(res => setData(res.data))
                .catch(err => console.error("Lỗi trend API:", err));
        }
    }, [asin]);

    const chartData = {
        labels: data.map(d => d.year || "N/A"),
        datasets: [
            {
                label: 'Số lượng đánh giá theo năm',
                data: data.map(d => d.count),
                fill: false,
                backgroundColor: '#007185', // Màu xanh đặc trưng của Amazon
                borderColor: 'rgba(0, 113, 133, 0.5)',
                tension: 0.3, // Độ cong của đường
                pointRadius: 5,
                pointHoverRadius: 8,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: `Xu hướng đánh giá sản phẩm: ${asin}` },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: { stepSize: 1 } // Vì số lượng review là số nguyên
            }
        }
    };

    if (data.length === 0) return <p>Không có dữ liệu thời gian cho mã này.</p>;

    return (
        <div style={{ height: '300px', width: '100%', marginTop: '20px' }}>
            <Line data={chartData} options={options} redraw={true} />
        </div>
    );
};

export default TrendChart;