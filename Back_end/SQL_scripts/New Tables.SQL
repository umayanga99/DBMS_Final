drop database if exists project_Final;

create database project_Final;

use project_Final;

drop table if exists Driver_ProductAssistant;
CREATE TABLE Product (
    id int auto_increment,
    price real(7,2),
    product_name VARCHAR(255),
    product_weight real(7,3),
    product_description VARCHAR(4000),
    unit_capacity int,
    PRIMARY KEY (id)
);

drop table if exists Product_Image;
CREATE TABLE Product_Image(
    image_ID int auto_increment,
    id int,
    product_image BLOB,
    PRIMARY KEY (image_ID),
    FOREIGN KEY (id) REFERENCES Product(id)
);  
drop table if exists Store;
CREATE TABLE Store (
    store_ID int auto_increment,
    city varchar(100),
    store_name varchar(50),
    TP_no int(10),
    store_address varchar(2000),
    primary key (store_ID)
);
drop table if exists Train_Route;
CREATE TABLE Train_Route (
    route_ID int auto_increment,
    store_ID int,
    depart_time Time,
    PRIMARY KEY (route_ID),
    FOREIGN key (store_ID) REFERENCES Store(store_ID)
 );
drop table if exists Train;
create table Train(
    train_ID int auto_increment,
    route_ID int,
    capacity int,
    loaded_Capacity int,
    PRIMARY KEY (train_ID),
    FOREIGN KEY (route_ID) REFERENCES Train_Route(route_ID)
);
drop table if exists Customer;
CREATE TABLE Customer (
    email varchar(255) ,
    customer_name varchar(255),
    customer_type enum('wholesaler', 'retailer', 'end customer', 'Manager'),
    customer_Password varchar(255),
    Telephone_No int(12),
    PRIMARY KEY (email)
);
drop table if exists Truck_Route;
CREATE TABLE Truck_Route (
    truck_route VARCHAR(225) PRIMARY KEY,
    route_duration float(4,2)
);
drop table if exists Orders;
CREATE TABLE Orders (
    order_ID int auto_increment,
    customer_address varchar(500),
    customer_email varchar(255),
    ordered_date date,
    ordered_time Time,
    truck_route varchar(225),
    tot_capacity int,
    prefered_dilivery_date date,
    total_price real,
    PRIMARY KEY (order_ID),
    FOREIGN KEY (truck_route) REFERENCES Truck_Route(truck_route),
    FOREIGN KEY (customer_email) REFERENCES Customer(email)
);
drop table if exists Truck;
CREATE TABLE Truck (
    truck_ID varchar(30),
    store_ID int,
    truck_route varchar(225),
    total_duration float(5,2), 
    PRIMARY KEY (truck_ID),
    FOREIGN KEY (store_ID) REFERENCES Store(store_ID),
    FOREIGN KEY (truck_route) REFERENCES Truck_Route(truck_route)
);
drop table if exists Delivery;
CREATE TABLE Delivery (
    delivery_number int auto_increment, 
    customer_email varchar(255),
    truck_ID varchar(30),
    PRIMARY KEY (delivery_number),
    FOREIGN KEY (truck_ID) REFERENCES Truck(truck_ID),
    FOREIGN KEY (customer_email) REFERENCES Customer(email)
);
drop table if exists Order_Delivery;
CREATE TABLE Order_Delivery(
    order_delivery_ID int auto_increment primary key,
    order_ID int,
    delivery_ID int,
    FOREIGN KEY(order_ID) REFERENCES Orders(order_ID),
    FOREIGN KEY(delivery_ID) REFERENCES Delivery(delivery_number)
);
drop table if exists Transport;
CREATE TABLE Transport(
    transport_ID int auto_increment PRIMARY KEY,
    train_ID int,
    FOREIGN KEY (train_ID) REFERENCES Train(train_ID)
);
drop table if exists Order_Transport;
CREATE TABLE Order_Transport(
    order_transport_ID int auto_increment PRIMARY key,
    transport_ID int,
    order_ID int,
    FOREIGN KEY (transport_ID) REFERENCES Transport(transport_ID),
    FOREIGN KEY (order_ID) REFERENCES Orders(order_ID)
);
drop table if exists Order_Product;
CREATE TABLE Order_Product (
    order_product_id int auto_increment PRIMARY KEY,
    order_ID int,
    id int,
    quantity int,
    FOREIGN KEY (order_ID) REFERENCES Orders(order_ID),
    FOREIGN KEY (id) REFERENCES Product(id)
);
drop table if exists Cart;
CREATE TABLE Cart(
    email varchar(255),
    cart_ID int auto_increment,
    PRIMARY KEY (cart_ID),
    FOREIGN KEY (Email) REFERENCES Customer(Email)
);
drop table if exists Cart_product;
CREATE TABLE Cart_product (
    cart_product_ID int auto_increment,
    id int,
    cart_ID int,
    quantity int,
    PRIMARY KEY(cart_product_ID),
    FOREIGN KEY (id) REFERENCES Product(id),
    FOREIGN KEY (cart_ID) REFERENCES Cart(cart_ID)
);
drop table if exists Driver;
CREATE TABLE Driver (
    email VARCHAR(255),
    driver_name VARCHAR(255),
    store_ID int,
    NIC VARCHAR(12),
    total_duration float(4,2),
    Telephone_No int(10),
    PRIMARY KEY (NIC),
    FOREIGN KEY (store_ID) REFERENCES Store(store_ID)
);
drop table if exists Assistant;
CREATE TABLE Assistant (
    NIC varchar(12),
    assistant_name varchar(225),
    store_ID int,
    email varchar(255),
	total_duration float(4,2),
    telephone_No int(10),
    PRIMARY KEY (NIC),
    FOREIGN KEY (store_ID) REFERENCES Store(store_ID)
);
drop table if exists Driver_Assistant;  
CREATE TABLE Driver_Assistant (
    turn_ID int auto_increment ,
    truck_ID varchar(30),
    driver_NIC varchar(12),
    assistant_NIC varchar(12),
    turn_duraion float(4,2),
    delivery_date date,
    PRIMARY KEY (turn_ID),
    FOREIGN KEY (truck_ID) REFERENCES Truck(truck_ID),
    FOREIGN KEY (driver_NIC) REFERENCES Driver(NIC),
    FOREIGN KEY (assistant_NIC) REFERENCES Assistant(NIC)
);
