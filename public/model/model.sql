CREATE TABLE restaurant(
   restaurant_id serial PRIMARY KEY,
   restaurant_name varchar(50) not null,
   restaurant_poster text not null,
   restaurant_author text not null
);

CREATE TABLE product(
    product_id serial,
    product_restaurant_id int REFERENCES restaurant(restaurant_id),
    product_poster text not null,
    product_name varchar(50) not null,
    product_price int not null
);