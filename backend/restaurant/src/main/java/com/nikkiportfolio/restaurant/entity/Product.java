package com.nikkiportfolio.restaurant.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="product")
@Data
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column (name = "id")
    private Long id;

    @Column (name = "name")
    private String name;

    @Column (name = "category")
    private String category;

    @Column (name="ingredients")
    private String ingredients;

    @Column (name = "price")
    private double price;

    @Column (name="totalQuantity")
    private int totalQuantity;

    @Column (name = "quantityAvailable")
    private int quantityAvailable;



}
