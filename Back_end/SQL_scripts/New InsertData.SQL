use project_Final;

insert into Product values (default, 1000, "p1", 12.45, "This is the product 1",10);
insert into Product values (default, 500, "p2", 45.74, "This is the product 2",100);
insert into Product values (default, 7550, "p3", 752.21, "This is the product 3",110);
insert into Product values (default, 7872, "p4", 75.11, "This is the product 4",120);
insert into Product values (default, 750, "p5", 17.87, "This is the product 5",160);
insert into Product values (default, 5782, "p6", 12.75, "This is the product 6",170);
insert into Product values (default, 2756, "p7", 12.45, "This is the product 7",810);
insert into Product values (default, 7862, "p8", 111.00, "This is the product 8",150);
insert into Product values (default, 785, "p9", 74.12, "This is the product 9",100);
insert into Product values (default, 4123, "p10", 470.33, "This is the product 10",10);

insert into Product_Image values (default,1,'toppng.com-png-effects-download-500x500.png');
insert into Product_Image values (default,2,'toppng.com-png-effects-download-500x500.png');
insert into Product_Image values (default,3,'toppng.com-png-effects-download-500x500.png');
insert into Product_Image values (default,4,'toppng.com-png-effects-download-500x500.png');
insert into Product_Image values (default,5,'toppng.com-png-effects-download-500x500.png');
insert into Product_Image values (default,6,'toppng.com-png-effects-download-500x500.png');
insert into Product_Image values (default,7,'toppng.com-png-effects-download-500x500.png');
insert into Product_Image values (default,8,'toppng.com-png-effects-download-500x500.png');
insert into Product_Image values (default,9,'toppng.com-png-effects-download-500x500.png');
insert into Product_Image values (default,10,'toppng.com-png-effects-download-500x500.png');

insert into Store values (default, "Colombo","Colombostore",0111234567,"addressColombo");
insert into Store values (default, "Galle","Gallestore",0913256987,"addressGalle");
insert into Store values (default, "Trinco","Trincostore",0260690609,"addressTrinco");
insert into Store values (default, "Jaffna","Jaffnastore",0210609409,"addresJaffna");
insert into Store values (default, "Anuradhapura","Anuradhapurastore",0257899609,"addressAnuradhapura");
insert into Store values (default, "Monaragala","Monaragalastore",0550601129,"addressMonaragala");
insert into Store values (default, "Kandy","Kandystore",0810846609,"addressKandy");

insert into Train_Route values (default, 1,'00:00:00');
insert into Train_Route values (default, 1,'10:30:00');
insert into Train_Route values (default, 3,'00:10:00');
insert into Train_Route values (default, 4,'13:00:00');
insert into Train_Route values (default, 2,'23:34:00');

insert into Train values(default, 1,3210,500);
insert into Train values(default, 2,3401,0);
insert into Train values(default, 3,4321,250);
insert into Train values(default, 4,3431,3000);
insert into Train values(default, 3,4325,66);
insert into Train values(default, 3,3342,0);
insert into Train values(default, 2,32345,250);

insert into Customer values ("abc@gmail.com","abc","wholesaler", 'sdfasdfa', 12345);
insert into Customer values ("sssd@gmail.com","sss","retailer", 'sdafsd3232', 23556);
insert into Customer values ("abwwwc@gmail.com","abww","end customer", 'se44g5g55', 56734);

insert into Truck_Route values ('Kandy', 10.30);
insert into Truck_Route values ('Kurunegala', 8.00);
insert into Truck_Route values ('Kegalla', 22.00);
insert into Truck_Route values ('Matale', 20.00);
insert into Truck_Route values ('Nuwara Eliya', 4.00);
insert into Truck_Route values ('Colombo', 4.00);
insert into Truck_Route values ('Gampaha', 4.00);
insert into Truck_Route values ('Kaluthara', 4.00);
insert into Truck_Route values ('Mathara', 4.00);
insert into Truck_Route values ('Rathnapura', 4.00);
insert into Truck_Route values ('Galle', 4.00);
insert into Truck_Route values ('Hambanthota', 4.00);
insert into Truck_Route values ('Monaragala', 4.00);
insert into Truck_Route values ('Ampara', 4.00);
insert into Truck_Route values ('Badulla', 4.00);
insert into Truck_Route values ('Anuradhapura', 4.00);
insert into Truck_Route values ('Polonnaruwa', 4.00);
insert into Truck_Route values ('Puttalama', 4.00);
insert into Truck_Route values ('Wauniya', 4.00);
insert into Truck_Route values ('Trinco', 4.00);
insert into Truck_Route values ('Baticlo', 4.00);
insert into Truck_Route values ('Jaffna', 4.00);
insert into Truck_Route values ('Kilinochchi', 4.00);
insert into Truck_Route values ('Mannar', 4.00);
insert into Truck_Route values ('Mulathiw', 4.00);

insert into Orders values (default, 'No 22, Kaluthara, Colombo','sssd@gmail.com','2022-8-20','12:20:57','Kaluthara',440,'2022-9-1',233.00);
insert into Orders values (default, 'No 13, Port Road, Trinco','abc@gmail.com','2022-10-1','16:23:24','Trinco',990,'2022-12-1',455.00);
insert into Orders values (default, 'No 117, Temple Road, Mathara','abwwwc@gmail.com','2022-12-20','4:16:23','Mathara',440,'2023-1-1',200.00);

insert into Truck values ('WP ABC 2891', 1, 'Colombo',25);
insert into Truck values ('WP QQ 2345', 1, 'Kaluthara',39.25);
insert into Truck values ('EP LK 1889', 3, 'Trinco',36.45);
insert into Truck values ('SP AAA 3449', 2, 'Mathara',45.00);
insert into Truck values ('NP XZ 3990', 4, 'Mulathiw',89.20);

insert into Delivery values (default, "sssd@gmail.com",'WP QQ 2345');
insert into Delivery values (default, "abc@gmail.com",'EP LK 1889');
insert into Delivery values (default, "abwwwc@gmail.com",'SP AAA 3449');

insert into Order_Delivery values (default,1,1);
insert into Order_Delivery values (default,2,2);
insert into Order_Delivery values (default,3,3);

insert into Transport values (default,2);
insert into Transport values (default,3);
insert into Transport values (default,5);

insert into Order_Transport values (default,1,1);
insert into Order_Transport values (default,2,2);
insert into Order_Transport values (default,3,3);

insert into Order_Product values (default,1,4,3000);
insert into Order_Product values (default,1,6,2600);
insert into Order_Product values (default,2,1,80);
insert into Order_Product values (default,3,2,4);
insert into Order_Product values (default,3,6,3);

insert into Cart values ("abc@gmail.com",default);
insert into Cart values ("sssd@gmail.com",default);
insert into Cart values ("abwwwc@gmail.com",default);

insert into Cart_Product values (default,4,1,3);
insert into Cart_Product values (default,6,1,4);
insert into Cart_Product values (default,1,2,2);
insert into Cart_Product values (default,2,3,3);
insert into Cart_Product values (default,3,3,7);

insert into Driver values ("driver1@gmail.com","driver 1",1,"78964545634V",34,0054734570);
insert into Driver values ("driver2@gmail.com","driver 2",2,"78964548634V",26,0054734570);
insert into Driver values ("driver3@gmail.com","driver 3",3,"12567845634V",23,0954731170);
insert into Driver values ("driver4@gmail.com","driver 4",4,"12367854634V",2,0222111770);
insert into Driver values ("driver5@gmail.com","driver 5",3,"14445456345V",5,0547310000);

insert into Assistant values ("12345678912V","assis 1",1,"assis1@gmail.com",26.40,0343454239);
insert into Assistant values ("12000008912V","assis 2",2,"assis2@gmail.com",23.30,0343454239);
insert into Assistant values ("12345674442V","assis 3",4,"assis3@gmail.com",10.30,0343454239);
insert into Assistant values ("55545678912V","assis 4",3,"assis4@gmail.com",13.30,0343454239);
insert into Assistant values ("12999678912V","assis 5",4,"assis5@gmail.com",4,0343454239);

insert into Driver_Assistant values (default,"WP QQ 2345","78964545634V",'12345678912V',4);
insert into Driver_Assistant values (default,"EP LK 1889","12567845634V",'12345674442V',4);
insert into Driver_Assistant values (default,"SP AAA 3449","78964545634V",'12000008912V',4);