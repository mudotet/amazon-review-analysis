import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { getRatingStatsByAsin } from '../api/reviewApi';

// 1. NHẬP CÁC THÀNH PHẦN CẦN THIẾT
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// 2. ĐĂNG KÝ (Bắt buộc phải nằm ngoài Component để không bị đăng ký lại khi render)
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const RatingChart = ({ asin }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (asin) {
            setLoading(true);
            getRatingStatsByAsin(asin)
                .then(res => {
                    setData(res.data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error(err);
                    setLoading(false);
                });
        }
    }, [asin]);

    const chartData = {
        labels: data.map(d => `${d.rating} Stars`),
        datasets: [{
            label: `Review Counts for ${asin}`,
            data: data.map(d => d.count),
            backgroundColor: 'rgba(255, 153, 0, 0.6)',
            borderColor: 'rgba(255, 153, 0, 1)',
            borderWidth: 1,
        }]
    };

    // 3. CẤU HÌNH OPTION ĐỂ TRÁNH LỖI CANVAS REUSE
    const options = {
        responsive: true,
        maintainAspectRatio: false, // Cho phép tùy chỉnh kích thước qua CSS
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Product Rating Distribution' },
        },
    };

    if (loading) return <p>Loading analytics...</p>;
    if (data.length === 0) return <p>No data available for this ASIN.</p>;

    return (
        <div style={{ height: '400px', width: '100%' }}>
            {/* Thêm thuộc tính redraw={true} nếu lỗi Canvas vẫn tiếp diễn */}
            <Bar data={chartData} options={options} redraw={true} />
        </div>
    );
};

export default RatingChart;