create database project;

use project;

CREATE TABLE Train_Route (
  route_ID int auto_increment,
   destination varchar(30),
   depart_time Time,
  PRIMARY KEY (route_ID)
 );

 create  table LoginDetail(
 email varchar(255),
  password varchar(20),
  roll varchar(255),
  primary key (email)

 );

 CREATE TABLE Telephone_No (
 	email varchar(255),
    telephone_no decimal(10,0),
    primary key (email,telephone_no),
    foreign key(email) references LoginDetail(email));
  
CREATE TABLE Product (
product_ID int auto_increment,
price DECIMAL(7,2),
name VARCHAR(255),
weight DECIMAL(7,3),
description VARCHAR(4000),
unit_capacity varchar(255),
quantity varchar(255),
PRIMARY KEY (product_ID)
 );

 CREATE TABLE Product_Image(
image_ID int auto_increment,
product_ID int,
image BLOB,
PRIMARY KEY (image_ID),
 FOREIGN KEY (product_ID) REFERENCES Product(product_ID));  
 
 create table Train(
train_ID int auto_increment,
route_ID int,
capacity smallint,
PRIMARY KEY (train_ID),
 FOREIGN KEY (route_ID) REFERENCES Train_Route(route_ID)
);

CREATE TABLE Store (
  city varchar(15) primary key,
  name varchar(15),
  TP_no int(10),
  address varchar(2000)
  
);


 
CREATE TABLE Customer (
  email varchar(255),
  name varchar(255),
  type varchar(15),
  ID int(5) primary key,
  foreign key(email) references LoginDetail(email)
);

CREATE TABLE Truck_Route (
route_ID int auto_increment,
route VARCHAR(255),
route_duration int,
route_details VARCHAR(2000),
PRIMARY KEY(route_ID)
);


CREATE TABLE Orders (
  order_ID int auto_increment,
  product_ID int,
  address varchar(255),
  customer_email varchar(255),
  quantity INT,
  date date,
  time Time,
  route_ID int,
  nearest_Branch varchar(20),
  tot_capacity int,
  state bool,
  prefered_dilivery_date date,
  destination varchar(255),
  PRIMARY KEY (order_ID),
  FOREIGN KEY (route_ID) REFERENCES Truck_Route(route_ID),
  FOREIGN KEY (customer_email) REFERENCES Customer(email),
  FOREIGN KEY (product_ID) REFERENCES Product(product_ID)
);

CREATE TABLE Truck (
  truck_ID int auto_increment,
  city varchar(15),
  PRIMARY KEY (truck_ID),
  FOREIGN KEY (city) REFERENCES Store(city)
);


CREATE TABLE Delivery (
  delivery_number int auto_increment,
  order_id int,
  customer_email varchar(255),
  truck_ID int,
  deliver_date Date,
  PRIMARY KEY (delivery_number,order_ID),
  FOREIGN KEY (truck_ID) REFERENCES Truck(truck_ID),
  FOREIGN KEY (order_ID) REFERENCES Orders(order_ID),
  FOREIGN KEY (customer_email) REFERENCES Customer(email)
);



CREATE TABLE Transport(
  transport_ID int auto_increment,
  train_ID int,
  order_ID int,
  transport_Date date,
  PRIMARY KEY (transport_ID,order_ID),
  FOREIGN KEY (train_ID) REFERENCES Train(train_ID),
  FOREIGN KEY (order_ID) REFERENCES Orders(order_ID)
);



CREATE TABLE Cart(
  email VARCHAR(225),
  cart_ID int auto_increment,
  PRIMARY KEY (cart_ID,email),
  FOREIGN KEY (email) REFERENCES Customer(email)
);

CREATE TABLE Cart_product (
  product_ID int,
  cart_ID int,
  PRIMARY KEY(product_ID,cart_ID),
  FOREIGN KEY (product_ID) REFERENCES Product(product_ID),
  FOREIGN KEY (cart_ID) REFERENCES Cart(cart_ID)
  
);


CREATE TABLE Driver (
  email VARCHAR(255),
  name VARCHAR(100),
  city varchar(15),
  NIC VARCHAR(12),
  total_duration int,
  TP_no int(10),
  PRIMARY KEY (NIC),
  FOREIGN KEY (city) REFERENCES Store(city)
);

CREATE TABLE Assistant (
  NIC varchar(12),
  name varchar(20),
  city varchar(15),
  total_duration int,
  email varchar(255),
  TP_no int(10),
  PRIMARY KEY (NIC),
  FOREIGN KEY (city) REFERENCES Store(city)
);



    
CREATE TABLE Driver_Assistant (
  turn_ID int auto_increment ,
  truck_ID int,
  driver_NIC varchar(12),
  assistant_NIC varchar(12),
  duration Time,
  PRIMARY KEY (turn_ID),
  FOREIGN KEY (truck_ID) REFERENCES Truck(truck_ID),
  FOREIGN KEY (driver_NIC) REFERENCES Driver(NIC),
  FOREIGN KEY (assistant_NIC) REFERENCES Assistant(NIC)
);