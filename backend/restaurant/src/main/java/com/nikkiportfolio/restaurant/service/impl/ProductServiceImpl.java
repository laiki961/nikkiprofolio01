package com.nikkiportfolio.restaurant.service.impl;

import com.nikkiportfolio.restaurant.respository.ProductRepository;
import com.nikkiportfolio.restaurant.entity.Product;
import com.nikkiportfolio.restaurant.service.ProductService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    Logger logger = LoggerFactory.getLogger(ProductService.class);

    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<Product> getAllProducts(){
        List<Product> products = productRepository.findAll();
        List<Product> productList = new ArrayList<>();
        return productList;
    }

    @Override
    public Product getProductDetails(Long productId) {
        return null;
    }
}
