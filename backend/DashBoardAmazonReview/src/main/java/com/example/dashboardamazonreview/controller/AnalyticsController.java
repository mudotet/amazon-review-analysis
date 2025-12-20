package com.example.dashboardamazonreview.controller;

import com.example.dashboardamazonreview.model.ProductReview ;
import com.example.dashboardamazonreview.repository.ReviewRepository;
import com.example.dashboardamazonreview.service.AnalysisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000") // Cấp quyền cho React
public class AnalyticsController {

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private AnalysisService analysisService;

    // API lấy toàn bộ dữ liệu (có phân trang nếu cần)
    @GetMapping("/reviews")
    public List<ProductReview> getAll() {
        return reviewRepository.findAll();
    }

    // API phục vụ biểu đồ hình tròn/cột về Rating
    @GetMapping("/stats/rating")
    public List<Map> getRatingStats() {
        return analysisService.getRatingStats();
    }

    // API phục vụ biểu đồ về Thương hiệu
    @GetMapping("/stats/brands")
    public List<Map> getBrandStats() {
        return analysisService.getTopBrands();
    }

    // API Tìm kiếm
    @GetMapping("/search")
    public List<ProductReview> search(@RequestParam String name) {
        return reviewRepository.findByNameContainingIgnoreCase(name);
    }

    @GetMapping("/stats/rating/{asin}")
    public List<Map> getRatingStatsByAsin(@PathVariable String asin) {
        return analysisService.getRatingStatsByAsin(asin);
    }

    @GetMapping("/stats/trend/{asin}")
    public List<Map> getReviewTrendByAsin(@PathVariable String asin) {
        // Sửa từ getRatingStatsByAsin thành getReviewTrendByAsin
        return analysisService.getReviewTrendByAsin(asin);
    }
    // Thêm API này để React lấy thông tin chi tiết (tên, brand) và danh sách review của 1 sản phẩm
    @GetMapping("/products/{asin}/reviews")
    public List<ProductReview> getReviewsByAsin(@PathVariable String asin) {
        return reviewRepository.findByAsins(asin);
    }
}