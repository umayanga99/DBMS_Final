create database project;

use project;

CREATE TABLE Train_Route (
    route_ID int auto_increment,
    destination varchar(50),
    depart_time Time,
    PRIMARY KEY (route_ID)
 );

 create  table LoginDetail(
    email varchar(255),
    login_password varchar(50),
    primary key (email)
 );

CREATE TABLE Telephone_No (
    email varchar(255),
    telephone_no decimal(10,0),
    primary key (telephone_no),
    foreign key(email) references LoginDetail(email)
);
  
CREATE TABLE Product (
    product_ID int auto_increment,
    price DECIMAL(7,2),
    product_name VARCHAR(255),
    product_weight DECIMAL(7,3),
    product_description VARCHAR(4000),
    unit_capacity int,
    quantity int,
    PRIMARY KEY (product_ID)
);

CREATE TABLE Product_Image(
    image_ID int auto_increment,
    product_ID int,
    product_image BLOB,
    PRIMARY KEY (image_ID),
    FOREIGN KEY (product_ID) REFERENCES Product(product_ID)
);  
ust
create table Train(
    train_ID int auto_increment,
    route_ID int,
    capacity smallint,
    PRIMARY KEY (train_ID),
    FOREIGN KEY (route_ID) REFERENCES Train_Route(route_ID)
);

CREATE TABLE Order_Delivery(
    order_delivery_ID int auto_increment,
    order_ID int,
    delivery_ID int,
    FOREIGN KEY(order_ID) REFERENCES Orders(order_ID),
    FOREIGN KEY(delivery_ID) REFERENCES Delivery(delivery_number)
);

CREATE TABLE Store (
    store_ID int auto_increment PRIMARY KEY,
    city varchar(50),
    store_name varchar(15),
    TP_no int(10),
    store_address varchar(2000),
    FOREIGN KEY(city) REFERENCES City_Table(city_ID)
);

CREATE TABLE Destination(
    final_destination varchar(100),
    nearest_store_ID int,
    PRIMARY KEY (final_destination),
    FOREIGN KEY (nearest_store_ID) REFERENCES Store(store_ID)
);

CREATE TABLE Customer (
    email varchar(255) PRIMARY KEY,
    customer_name varchar(255),
    customer_type varchar(15),
    customer_Password varchar(255),
    customer_TP int(10)
);

CREATE TABLE Truck_Route (
    route_ID int auto_increment,
    truck_route VARCHAR(255),
    route_duration int,
    route_details VARCHAR(2000),
    PRIMARY KEY(route_ID)
);

CREATE TABLE Order (
    order_ID int auto_increment,
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
    FOREIGN KEY (customer_email) REFERENCES Customer(email)
);

CREATE TABLE City_Table(
    city_ID int auto_increment,
    city varchar(50)

);



CREATE TABLE Truck (
    truck_ID int auto_increment,
    store_ID int,
    PRIMARY KEY (truck_ID),
    FOREIGN KEY (store_ID) REFERENCES Store(store_ID)
);

CREATE TABLE Delivery (
    delivery_number int auto_increment,
    order_id int,
    customer_email varchar(255),
    truck_ID int,
    deliver_date Date,
    PRIMARY KEY (delivery_number),
    FOREIGN KEY (truck_ID) REFERENCES Truck(truck_ID),
    FOREIGN KEY (customer_email) REFERENCES Customer(email)
);

CREATE TABLE Transport(
    transport_ID int auto_increment PRIMARY KEY,
    train_ID int,
    transport_Date date,
    FOREIGN KEY (train_ID) REFERENCES Train(train_ID)
);

CREATE TABLE Order_Transport(
    order_transport_ID int auto_increment PRIMARY key,
    transport_ID int,
    order_ID int,
    FOREIGN KEY (transport_ID) REFERENCES Transport(transport_ID),
    FOREIGN KEY (order_ID) REFERENCES Order(order_ID)
)
CREATE TABLE Cart(
    Email int,
    cart_ID int auto_increment,
    PRIMARY KEY (cart_ID),
    FOREIGN KEY (Email) REFERENCES Customer(Email)
);

CREATE TABLE Cart_product (
    cart_product_ID int auto_increment,
    product_ID int,
    cart_ID int,
    PRIMARY KEY(cart_product_ID),
    FOREIGN KEY (product_ID) REFERENCES Product(product_ID),
    FOREIGN KEY (cart_ID) REFERENCES Cart(cart_ID)
);

CREATE TABLE Driver (
    email VARCHAR(255),
    name VARCHAR(255),
    store_ID int,
    NIC VARCHAR(12),
    total_duration int,
    TP_no int(10),
    PRIMARY KEY (NIC),
    FOREIGN KEY (store_ID) REFERENCES Store(store_ID)
);

CREATE TABLE Assistant (
    NIC varchar(12),
    name varchar(225),
    store_ID int,
    total_duration int,
    email varchar(255),
    TP_no int(10),
    PRIMARY KEY (NIC),
    FOREIGN KEY (store_ID) REFERENCES Store(store_ID)
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