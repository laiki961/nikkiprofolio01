package com.nikkiportfolio.libraryapp.dao;

import com.nikkiportfolio.libraryapp.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
