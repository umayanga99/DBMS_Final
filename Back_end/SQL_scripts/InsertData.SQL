use project;


insert into train_route (destination,depart_time) values ('Colombo','00:00:00');
insert into train_route (destination,depart_time) values ('Colombo','10:30:00');
insert into train_route (destination,depart_time) values ('Galle','00:10:00');
insert into train_route (destination,depart_time) values ('Trinco','13:00:00');
insert into train_route (destination,depart_time) values ('Matara','23:34:00');


insert into logindetail values ("abc@gmail.com","abc","customer");
insert into logindetail values ("storemanager@gmail.com","storeman","store-manager");
insert into logindetail values ("mainmanager@gmail.com","mainman","main-manager");
insert into logindetail values ("sssd@gmail.com","sawec","customer");
insert into logindetail values ("abcassff@gmail.com","abcqw123","store-manager");
insert into logindetail values ("abwwwc@gmail.com","aqwec","customer");


insert into telephone_no values ("abc@gmail.com",0760600600);
insert into telephone_no values ("storemanager@gmail.com",0712464545);
insert into telephone_no values ("mainmanager@gmail.com",2342342342);
insert into telephone_no values ("sssd@gmail.com",6354654235);
insert into telephone_no values ("abwwwc@gmail.com",6343463462);
insert into telephone_no values ("abcassff@gmail.com",2344565678);
insert into telephone_no values ("mainmanager@gmail.com",3454565786);


insert into product (price,name,weight,description,unit_capacity,quantity) values (1000, "p1", 12.45, "This is the product 1","10cm3",10);
insert into product (price,name,weight,description,unit_capacity,quantity) values (500, "p2", 45.74, "This is the product 2","11cm3",100);
insert into product (price,name,weight,description,unit_capacity,quantity) values (7550, "p3", 752.21, "This is the product 3","41cm3",110);
insert into product (price,name,weight,description,unit_capacity,quantity) values (7872, "p4", 75.11, "This is the product 4","45cm3",120);
insert into product (price,name,weight,description,unit_capacity,quantity) values (750, "p5", 17.87, "This is the product 5","87cm3",160);
insert into product (price,name,weight,description,unit_capacity,quantity) values (5782, "p6", 12.75, "This is the product 6","5cm3",170);
insert into product (price,name,weight,description,unit_capacity,quantity) values (2756, "p7", 12.45, "This is the product 7","87cm3",810);
insert into product (price,name,weight,description,unit_capacity,quantity) values (7862, "p8", 111.00, "This is the product 8","57cm3",150);
insert into product (price,name,weight,description,unit_capacity,quantity) values (785, "p9", 74.12, "This is the product 9","78cm3",100);
insert into product (price,name,weight,description,unit_capacity,quantity) values (4123, "p10", 470.33, "This is the product 10","1cm3",10);


insert into product_image (product_ID,image) values (1,'toppng.com-png-effects-download-500x500.png');
insert into product_image (product_ID,image) values (2,'toppng.com-png-effects-download-500x500.png');
insert into product_image (product_ID,image) values (3,'toppng.com-png-effects-download-500x500.png');
insert into product_image (product_ID,image) values (4,'toppng.com-png-effects-download-500x500.png');
insert into product_image (product_ID,image) values (5,'toppng.com-png-effects-download-500x500.png');
insert into product_image (product_ID,image) values (6,'toppng.com-png-effects-download-500x500.png');
insert into product_image (product_ID,image) values (7,'toppng.com-png-effects-download-500x500.png');
insert into product_image (product_ID,image) values (8,'toppng.com-png-effects-download-500x500.png');
insert into product_image (product_ID,image) values (9,'toppng.com-png-effects-download-500x500.png');
insert into product_image (product_ID,image) values (10,'toppng.com-png-effects-download-500x500.png');


insert into train (route_ID,capacity) values(1,3210);
insert into train (route_ID,capacity) values(2,3401);
insert into train (route_ID,capacity) values(3,4321);
insert into train (route_ID,capacity) values(4,3431);
insert into train (route_ID,capacity) values(5,4325);
insert into train (route_ID,capacity) values(5,3342);
insert into train (route_ID,capacity) values(3,32345);


insert into store values ("Colombo","Colombostore",0760600609,"addressColombo");
insert into store values ("Galle","Gallestore",076060089,"addressGalle");
insert into store values ("Trinco","Trincostore",0760690609,"addressTrinco");
insert into store values ("Negambo","Negambostore",0760606609,"addressNegambo");


insert into customer values ("abc@gmail.com","abc","wholeseler",12345);
insert into customer values ("sssd@gmail.com","sss","retailer",23556);
insert into customer values ("abwwwc@gmail.com","abww","customer",56734);


insert into truck_route (route,route_duration,route_details) values ("colomba wate",12,"colomba wate hamathanama");
insert into truck_route (route,route_duration,route_details) values ("galle wate",10,"galle wate hamathanama");
insert into truck_route (route,route_duration,route_details) values ("trinco wate",12,"trinco wate hamathanama");


insert into orders (product_ID,address,customer_email,quantity,date,time,route_ID,nearest_Branch,tot_capacity,state,prefered_dilivery_date,destination) values (7,"university of moratuwa","abc@gmail.com",100,'2022-12-15','00:00:00',1,"Colombo",870,1,'2022-12-25',"Moratuwa");
insert into orders (product_ID,address,customer_email,quantity,date,time,route_ID,nearest_Branch,tot_capacity,state,prefered_dilivery_date,destination) values (10,"university of galle","abwwwc@gmail.com",2,'2022-10-15','14:10:00',2,"Galle",70,2,'2022-11-01',"galle fort");
insert into orders (product_ID,address,customer_email,quantity,date,time,route_ID,nearest_Branch,tot_capacity,state,prefered_dilivery_date,destination) values (6,"university of trinco","abwwwc@gmail.com",30,'2022-12-05','03:00:00',3,"Trinco",410,1,'2022-12-20',"trinco harber");


insert into truck (city) values ("Colombo");
insert into truck (city) values ("Trinco");
insert into truck (city) values ("Galle");
insert into truck (city) values ("Colombo");
insert into truck (city) values ("trinco");
insert into truck (city) values ("Colombo");


insert into delivery (order_id,customer_email,truck_ID,deliver_date) values (1,"abc@gmail.com",1,'2022-12-21');
insert into delivery (order_id,customer_email,truck_ID,deliver_date) values (2,"abwwwc@gmail.com",3,"2022-10-21");
insert into delivery (order_id,customer_email,truck_ID,deliver_date) values (3,"abwwwc@gmail.com",6,"2022-12-06");


insert into transport (train_ID,order_ID,transport_Date) values (2,1,"2022-12-18");
insert into transport (train_ID,order_ID,transport_Date) values (3,2,"2022-10-19");
insert into transport (train_ID,order_ID,transport_Date) values (4,3,"2022-12-05");


insert into cart (email) values ("abc@gmail.com");
insert into cart (email) values ("sssd@gmail.com");
insert into cart (email) values ("abwwwc@gmail.com");


insert into cart_product values (1,2);
insert into cart_product values (1,1);
insert into cart_product values (1,3);
insert into cart_product values (2,2);
insert into cart_product values (2,1);


insert into driver values ("driver1@gmail.com","driver 1","colombo","123345456345",10,'0035454667');
insert into driver values ("driver2@gmail.com","driver 2","galle","789645456345",34,'0054734570');
insert into driver values ("driver3@gmail.com","driver 3","trinco","125678456345",23,'0954731170');
insert into driver values ("driver4@gmail.com","driver 4","galle","123678546345",2,'0222111770');
insert into driver values ("driver5@gmail.com","driver 5","colombo","14445456345",5,'0547310000');


insert into assistant values ("123456789123","assis 1","colombo",32,"assis1@gmail.com",0343454239);
insert into assistant values ("120000089123","assis 2","galle",30,"assis2@gmail.com",0343454239);
insert into assistant values ("123456744423","assis 3","galle",23,"assis3@gmail.com",0343454239);
insert into assistant values ("555456789123","assis 4","trinco",11,"assis4@gmail.com",0343454239);
insert into assistant values ("129996789123","assis 5","trinco",35,"assis5@gmail.com",0343454239);


insert into driver_assistant (truck_ID,driver_NIC,assistant_NIC,duration) values (1,"123345456345","123456789123",12);
insert into driver_assistant (truck_ID,driver_NIC,assistant_NIC,duration) values (2,"125678456345","129996789123",10);
insert into driver_assistant (truck_ID,driver_NIC,assistant_NIC,duration) values (3,"123678546345","123456744423",18);