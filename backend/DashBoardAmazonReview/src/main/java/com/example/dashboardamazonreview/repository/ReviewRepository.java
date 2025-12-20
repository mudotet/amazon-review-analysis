package com.example.dashboardamazonreview.repository;

import com.example.dashboardamazonreview.model.ProductReview ;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ReviewRepository extends MongoRepository<ProductReview, String> {
    // Tìm tất cả review của một mã sản phẩm (cột asins trong file)
    List<ProductReview> findByAsins(String asins);

    // Tìm kiếm sản phẩm theo tên (để làm chức năng Search trên web)
    List<ProductReview> findByNameContainingIgnoreCase(String name);
}