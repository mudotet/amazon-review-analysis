package com.example.dashboardamazonreview.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Data
@Document(collection = "reviews")
public class ProductReview {
    @Id
    private String id;

    private String asins;
    private String brand;
    private String name;
    private String categories;

    // Map chính xác tên cột có dấu chấm từ file CSV/Compass
    @Field("reviews.rating")
    private Double rating;

    @Field("reviews.text")
    private String reviewText;

    @Field("reviews.title")
    private String reviewTitle;

    @Field("reviews.username")
    private String username;

    @Field("reviews.date")
    private String reviewDate;

    @Field("reviews.numHelpful")
    private Integer numHelpful;
}