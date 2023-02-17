SELECT * FROM restaurant.product;

DESCRIBE restaurant.product;

INSERT INTO product (name, price, category, ingredients, total_quantity, quantity_available)
VALUES ('Pad Thai', 12.99 , 'Noodles', 'lime, peanuts, chicken', 100, 89); 

INSERT INTO product (name, price, category, ingredients, total_quantity, quantity_available)
VALUES ('Fried Rice', 13.99 , 'Rice', 'rice, chicken', 150, 99),('Mango Sticky Rice', 7.99 , 'Dessert', 'Mango, Sticky Rice', 50, 20);