package com.nikkiportfolio.restaurant.service;

import com.nikkiportfolio.restaurant.entity.Product;

import java.util.List;

public interface ProductService {
    List<Product> getAllProducts();
    Product getProductDetails(Long productId);


}
