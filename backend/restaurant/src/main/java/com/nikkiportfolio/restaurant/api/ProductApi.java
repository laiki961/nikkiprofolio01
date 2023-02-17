package com.nikkiportfolio.restaurant.api;

import com.nikkiportfolio.restaurant.domain.Product;
import com.nikkiportfolio.restaurant.domain.dto.response.ProductResponseDto;
import com.nikkiportfolio.restaurant.service.ProductService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/public/product")
public class ProductApi {
    Logger logger = LoggerFactory.getLogger(ProductApi.class);

    @Autowired
    private ProductService productService;

    @GetMapping("/")
    public List<ProductResponseDto> fetchAllProducts(){
        List<ProductResponseDto> responseDtos = new ArrayList<>();
        List<Product> products = productService.getAllProducts();
        logger.debug(products.toString());
        for(Product product: products){
            ProductResponseDto dto = new ProductResponseDto(product);
            responseDtos.add(dto);
        }
        return responseDtos;
    }

    @GetMapping("/details/{productId}")
    public ProductResponseDto fetchProductDetails(@RequestParam("productId") Long productId){
        Product product = productService.getProductDetails(productId);
        return new ProductResponseDto(product);
    }


}
