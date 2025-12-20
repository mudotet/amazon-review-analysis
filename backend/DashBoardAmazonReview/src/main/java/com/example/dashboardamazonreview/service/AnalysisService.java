package com.example.dashboardamazonreview.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.*;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Map;

@Service
public class AnalysisService {

    @Autowired
    private MongoTemplate mongoTemplate;

    // 1. Thống kê phân bổ sao (Rating Distribution)
    public List<Map> getRatingStats() {
        Aggregation agg = Aggregation.newAggregation(
                Aggregation.group("reviews.rating").count().as("count"),
                Aggregation.project("count").and("_id").as("rating"),
                Aggregation.sort(Sort.Direction.DESC, "rating")
        );
        return mongoTemplate.aggregate(agg, "reviews", Map.class).getMappedResults();
    }

    // 2. Top 5 thương hiệu có nhiều đánh giá nhất
    public List<Map> getTopBrands() {
        Aggregation agg = Aggregation.newAggregation(
                Aggregation.group("brand").count().as("totalCount"),
                Aggregation.sort(Sort.Direction.DESC, "totalCount"),
                Aggregation.limit(5)
        );
        return mongoTemplate.aggregate(agg, "reviews", Map.class).getMappedResults();
    }
    public List<Map> getRatingStatsByAsin(String asin) {
        Aggregation agg = Aggregation.newAggregation(
                Aggregation.match(Criteria.where("asins").is(asin)), // Lọc theo mã sản phẩm
                Aggregation.group("reviews.rating").count().as("count"),
                Aggregation.project("count").and("_id").as("rating"),
                Aggregation.sort(Sort.Direction.DESC, "rating")
        );
        return mongoTemplate.aggregate(agg, "reviews", Map.class).getMappedResults();
    }
    public List<Map> getReviewTrendByAsin(String asin) {
        Aggregation agg = Aggregation.newAggregation(
                Aggregation.match(Criteria.where("asins").is(asin)),
                // Sử dụng $project để lấy trường date ra trước
                Aggregation.project()
                        .and("reviews.date").as("d"),
                // Sau đó mới cắt chuỗi lấy năm
                Aggregation.project()
                        .andExpression("substr(d, 0, 4)").as("year"),
                Aggregation.group("year").count().as("count"),
                Aggregation.sort(Sort.Direction.ASC, "_id")
        );
        return mongoTemplate.aggregate(agg, "reviews", Map.class).getMappedResults();
    }
}