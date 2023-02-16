package com.nikkiportfolio.libraryapp.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "product")
@Data
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "size")
    private String size;

    @Column(name = "sale")
    private boolean sale;

    @Column(name = "img")
    private String img;

    @Column(name = "colour")
    private String colour;

    @Column(name = "price")
    private Double price;

    @Column(name = "total_quantity")
    private Long total_quantity;

    @Column(name = "quantity_available")
    private Long quantity_available;
}
