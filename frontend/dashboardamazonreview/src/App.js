import React, { useState, useEffect } from 'react';
import './App.css';
import RatingChart from './components/RatingChart';
import TrendChart from './components/TrendChart';
import axios from 'axios';

function App() {
    const sampleAsins = ["B00QJDU3KY", "B01BH83OOM", "B00IOYAM4K", "B00KVNY2KA"];
    const [selectedAsin, setSelectedAsin] = useState(sampleAsins[0]);
    const [productInfo, setProductInfo] = useState({ name: '', brand: '' });

    // Hiệu ứng lấy thông tin chi tiết sản phẩm khi đổi ASIN
    useEffect(() => {
        // Gọi API lấy review đầu tiên của ASIN này để trích xuất Name và Brand
        axios.get(`http://localhost:8080/api/v1/products/${selectedAsin}/reviews`)
            .then(res => {
                if (res.data.length > 0) {
                    setProductInfo({
                        name: res.data[0].name,
                        brand: res.data[0].brand
                    });
                }
            })
            .catch(err => console.error("Không lấy được thông tin SP:", err));
    }, [selectedAsin]);

    return (
        <div className="App">
            <nav className="navbar">
                <div className="logo">Amazon Review <span className="highlight">Analytics</span></div>
                <div className="project-tag">Big Data Project (MongoDB)</div>
            </nav>

            <div className="main-container">
                {/* Thanh điều khiển bên trái (Sidebar) */}
                <aside className="sidebar">
                    <div className="control-section">
                        <h3>Chọn sản phẩm</h3>
                        <div className="asin-list">
                            {sampleAsins.map(asin => (
                                <div
                                    key={asin}
                                    className={`asin-item ${selectedAsin === asin ? "active" : ""}`}
                                    onClick={() => setSelectedAsin(asin)}
                                >
                                    {asin}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="control-section">
                        <h3>Tìm kiếm thủ công</h3>
                        <input
                            className="search-input"
                            type="text"
                            placeholder="Nhập ASIN..."
                            onKeyDown={(e) => e.key === 'Enter' && setSelectedAsin(e.target.value)}
                        />
                    </div>
                </aside>

                {/* Dashboard chính */}
                <main className="dashboard">
                    <header className="product-header">
                        <div className="header-info">
                            <span className="brand-tag">{productInfo.brand || "Amazon"}</span>
                            <h1>{productInfo.name || "Loading Product Name..."}</h1>
                            <p className="asin-text">ASIN: {selectedAsin}</p>
                        </div>
                    </header>

                    {/* Hàng chứa các con số tổng quát (Summary Cards) */}
                    <div className="summary-row">
                        <div className="card">
                            <span className="card-label">Nguồn dữ liệu</span>
                            <span className="card-value">Kaggle</span>
                        </div>
                        <div className="card">
                            <span className="card-label">Dataset</span>
                            <span className="card-value">Amazon Product Reviews Dataset.csv</span>
                        </div>
                        <div className="card">
                            <span className="card-label">Analytics</span>
                            <span className="card-value">Real-time</span>
                        </div>
                    </div>

                    <div className="dashboard-grid">
                        <section className="chart-card">
                            <h3>Phân bổ mức độ hài lòng</h3>
                            <RatingChart asin={selectedAsin} />
                        </section>
                        <section className="chart-card">
                            <h3>Xu hướng review qua các năm</h3>
                            <TrendChart asin={selectedAsin} />
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;