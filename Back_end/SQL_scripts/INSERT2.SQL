use project;

insert into Train_Route (destination,depart_time) values ('Colombo','00:00:00');
insert into Train_Route (destination,depart_time) values ('Colombo','10:30:00');
insert into Train_Route (destination,depart_time) values ('Galle','00:10:00');
insert into Train_Route (destination,depart_time) values ('Trinco','13:00:00');
insert into Train_Route (destination,depart_time) values ('Matara','23:34:00');



insert into City_Table (city) values ('Colombo');
insert into City_Table (city) values ('Ratnapura');
insert into City_Table (city) values ('Galle');
insert into City_Table (city) values ('Trinco');
insert into City_Table (city) values ('Matara');



insert into Product (price,name,weight,description,unit_capacity,quantity) values (1000, "p1", 12.45, "This is the product 1","10cm3",10);
insert into Product (price,name,weight,description,unit_capacity,quantity) values (500, "p2", 45.74, "This is the product 2","11cm3",100);
insert into Product (price,name,weight,description,unit_capacity,quantity) values (7550, "p3", 752.21, "This is the product 3","41cm3",110);
insert into Product (price,name,weight,description,unit_capacity,quantity) values (7872, "p4", 75.11, "This is the product 4","45cm3",120);
insert into Product (price,name,weight,description,unit_capacity,quantity) values (750, "p5", 17.87, "This is the product 5","87cm3",160);
insert into Product (price,name,weight,description,unit_capacity,quantity) values (5782, "p6", 12.75, "This is the product 6","5cm3",170);
insert into Product (price,name,weight,description,unit_capacity,quantity) values (2756, "p7", 12.45, "This is the product 7","87cm3",810);
insert into Product (price,name,weight,description,unit_capacity,quantity) values (7862, "p8", 111.00, "This is the product 8","57cm3",150);
insert into Product (price,name,weight,description,unit_capacity,quantity) values (785, "p9", 74.12, "This is the product 9","78cm3",100);
insert into Product (price,name,weight,description,unit_capacity,quantity) values (4123, "p10", 470.33, "This is the product 10","1cm3",10);


insert into Train (route_ID,capacity,loaded_capacity) values(1,3210,500);
insert into Train (route_ID,capacity,loaded_capacity) values(2,3401,1000);
insert into Train (route_ID,capacity,loaded_capacity) values(3,4321,250);
insert into Train (route_ID,capacity,loaded_capacity) values(4,3431,3000);
insert into Train (route_ID,capacity,loaded_capacity) values(5,4325,2000);
insert into Train (route_ID,capacity,loaded_capacity) values(5,3342,1000);
insert into Train (route_ID,capacity,loaded_capacity) values(3,32345,250);

insert into Store values ("Colombo","Colombostore",0760600609,"addressColombo");
insert into Store values ("Galle","Gallestore",076060089,"addressGalle");
insert into Store values ("Trinco","Trincostore",0760690609,"addressTrinco");
insert into Store values ("Negambo","Negambostore",0760606609,"addressNegambo");

insert into Destination values ("Colombo",3);
insert into Destination values ("Galle",2);
insert into Destination values ("Trinco",1);
insert into Destination values ("Negambo",4);

insert into Customer values ("abc@gmail.com","abc","wholeseler",12345);
insert into Customer values ("sssd@gmail.com","sss","retailer",23556);
insert into Customer values ("abwwwc@gmail.com","abww","customer",56734);

insert into Truck_Route (truck_route,route_duration,route_details) values ("colomba wate",12,"colomba wate hamathanama");
insert into Truck_Route (truck_route,route_duration,route_details) values ("galle wate",10,"galle wate hamathanama");
insert into Truck_Route (truck_route,route_duration,route_details) values ("trinco wate",12,"trinco wate hamathanama");

insert into orders (address,customer_email,cuurent_date,current_time,route_ID,nearest_Branch,tot_capacity,current_state,prefered_delivery_date,destination) values (7,"university of moratuwa","abc@gmail.com",'2022-12-15','00:00:00',1,"Colombo",870,1,'2022-12-25',"Moratuwa");
insert into orders (address,customer_email,cuurent_date,current_time,route_ID,nearest_Branch,tot_capacity,current_state,prefered_delivery_date,destination) values (10,"university of galle","abwwwc@gmail.com",'2022-10-15','14:10:00',2,"Galle",70,2,'2022-11-01',"galle fort");
insert into orders (address,customer_email,cuurent_date,current_time,route_ID,nearest_Branch,tot_capacity,current_state,prefered_delivery_date,destination) values (6,"university of trinco","abwwwc@gmail.com",30,'2022-12-05','03:00:00',3,"Trinco",410,1,'2022-12-20',"trinco harber");

insert into Truck (store_ID) values (1);
insert into Truck (store_ID) values (2);
insert into Truck (store_ID) values (4);
insert into Truck (store_ID) values (3);

insert into Delivery (customer_email,truck_ID,deliver_date) values ("abc@gmail.com",1,'2022-12-21');
insert into Delivery (customer_email,truck_ID,deliver_date) values ("abwwwc@gmail.com",3,"2022-10-21");
insert into Delivery (customer_email,truck_ID,deliver_date) values ("abwwwc@gmail.com",6,"2022-12-06");

insert into Order_Delivery (order_ID,delivery_ID) values (1,1);
insert into Order_Delivery (order_ID,delivery_ID) values (2,2);
insert into Order_Delivery (order_ID,delivery_ID) values (3,3);

insert into Transport (train_ID,transport_Date) values (2,"2022-12-18");
insert into Transport (train_ID,transport_Date) values (3,"2022-10-19");
insert into Transport (train_ID,transport_Date) values (4,"2022-12-05");

insert into Order_Transport (order_ID,transport_ID) values (1,1);
insert into Order_Transport (order_ID,transport_ID) values (2,2);
insert into Order_Transport (order_ID,transport_ID) values (3,3);

insert into Cart (email,cart_ID) values ("abc@gmail.com",2);
insert into Cart (email,cart_ID) values ("sssd@gmail.com",3);
insert into Cart (email,cart_ID) values ("abwwwc@gmail.com",1);

insert into Cart_Product (product_ID,cart_ID) values (1,2);
insert into Cart_Product (product_ID,cart_ID) values (1,1);
insert into Cart_Product (product_ID,cart_ID) values (1,3);
insert into Cart_Product (product_ID,cart_ID) values (2,2);
insert into Cart_Product (product_ID,cart_ID) values (2,1);

insert into Driver values ("driver1@gmail.com","driver 1",1,"789645456345",34,'0054734570');
insert into Driver values ("driver2@gmail.com","driver 2",2,"789645456345",34,'0054734570');
insert into Driver values ("driver3@gmail.com","driver 3",3,"125678456345",23,'0954731170');
insert into Driver values ("driver4@gmail.com","driver 4",4,"123678546345",2,'0222111770');
insert into Driver values ("driver5@gmail.com","driver 5",5,"14445456345",5,'0547310000');

insert into Assistant values ("123456789123","assis 1",1,32,"assis1@gmail.com",0343454239);
insert into Assistant values ("120000089123","assis 2",2,30,"assis2@gmail.com",0343454239);
insert into Assistant values ("123456744423","assis 3",2,23,"assis3@gmail.com",0343454239);
insert into Assistant values ("555456789123","assis 4",3,11,"assis4@gmail.com",0343454239);
insert into Assistant values ("129996789123","assis 5",1,35,"assis5@gmail.com",0343454239);

insert into Driver_Assistant (truck_ID,driver_NIC,assistant_NIC,duration) values (1,"123345456345","123456789123",12);
insert into Driver_Assistant (truck_ID,driver_NIC,assistant_NIC,duration) values (2,"125678456345","129996789123",10);
insert into Driver_Assistant (truck_ID,driver_NIC,assistant_NIC,duration) values (3,"123678546345","123456744423",18);