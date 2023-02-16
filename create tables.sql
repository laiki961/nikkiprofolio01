USE ecommerce;

CREATE TABLE users(
id INT AUTO_INCREMENT primary key,
first_name VARCHAR(30),
last_name VARCHAR(30),
gender ENUM('M','F'),
country varchar(20),
unit_no varchar(10),
street varchar(30),
city varchar(20),
zip varchar(10)
);

CREATE TABLE orders (
id INT AUTO_INCREMENT PRIMARY KEY,
product_id INT,
user_id INT,
order_time DATETIME,
FOREIGN KEY(product_id) references products(id),
FOREIGN KEY(user_id) references users(id)
);

CREATE TABLE reviews (
id INT auto_increment Primary key,
user_id INT,
product_id INT,
rating decimal(1,1),
comment varchar(100),
FOREIGN KEY(product_id) references products(id),
FOREIGN KEY(user_id) references users(id)
);
