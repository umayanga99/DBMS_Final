Delimiter $$
create procedure Save_To_Cart(
	email varchar(225),
	id int,
    quantity int)
begin 
	declare cart_ID int;
	select cart_ID into cart_ID from cart where cart.email = email;
	insert into cart_product values (default, id, cart_ID, quantity);
end$$
delimiter ;


drop procedure if exists select_train;
DELIMITER $$
CREATE PROCEDURE select_train(
	order_ID int)
BEGIN
	declare train_ID int;
	select train_ID into train_ID from train inner join 
	train_route using(route_id) where store_ID in (select store_ID from
	truck where truck_route = (select truck_route from orders where orders.order_ID = order_ID)) and 
	train.loaded_Capacity + (select tot_capacity from orders where orders.order_ID = order_ID) <= train.capacity 
	order by IF(SIGN(TIMEDIFF(train_route.depart_time, CURTIME())) = 1, 1, 0) limit 1;
    
    insert into transport values (default, train_ID);
    insert into order_transport values (default, max(transport.transport_ID), order_ID);
END $$ 
DELIMITER ;

drop procedure if exists select_truck;
DELIMITER $$
CREATE PROCEDURE select_truck(
	order_ID int)
BEGIN
	declare truck_ID int;
	select truk_ID into truck_ID from truck inner join 
	truck_route tr using(truck_route) where tr.truck_route in
    (select truck_route from orders where order_ID = orders.order_ID)
    order by total_duration limit 1;
   
	update truck set total_duratio = total_durationi + (select route_duration from
    truck_route where truck_route = (select truck_route from orders where order_ID=order_ID));
    insert into driver_assistant values(default, truck_ID, none, none);
END $$ 
DELIMITER ;

drop procedure if exists select_driver;
DELIMITER $$
CREATE PROCEDURE select_driver(
	order_ID int)
BEGIN
	declare nic varchar(12);
	select nic into nic from driver where store_ID = (select store_ID from truck where
	truck_route = (select truck_route from orders where order_ID = 2)) and 
	total_duration + (select route_duration from truck_route where truck_route = (
	select truck_route from orders where order_ID = 2)) <= 40 and
    (select NIC from driver_assistant where turn_ID = (select max(turn_ID)-1 from driver_assistent)) <> nic
    order by total_duration asc limit 1;
	
    update driver set total_duratio = total_durationi + (select route_duration from
    truck_route where truck_route = (select truck_route from orders where order_ID=order_ID));
    
    update driver_assistant set driver_NIC = nic where turn_ID = max(turn_ID);
END $$ 
DELIMITER ;

drop procedure if exists select_assistant;
DELIMITER $$
CREATE PROCEDURE select_assistant(
	order_ID int)
BEGIN
	declare nic varchar(12);
	select nic into nic from assistant where store_ID = (select store_ID from truck where
	truck_route = (select truck_route from orders where order_ID = 2)) and 
	total_duration + (select route_duration from truck_route where truck_route = (
	select truck_route from orders where order_ID = 2)) <= 40 and
     (select NIC from driver_assistant where turn_ID = (select max(turn_ID)-1 from driver_assistent) and turn_ID = (select max(turn_ID)-2 from driver_assistent)) <> nic
     order by total_duration asc limit 1;
 
    update assistant set total_duratio = total_durationi + (select route_duration from
    truck_route where truck_route = (select truck_route from orders where order_ID=order_ID));
    
    update assistant_assistant set assistant_NIC = nic where turn_ID = max(turn_ID);
END $$ 
DELIMITER ;