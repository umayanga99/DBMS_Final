drop procedure save_to_cart;
Delimiter $$
create procedure Save_To_Cart(
	email varchar(225),
	id int,
    quantity int)
begin 
	declare current_id int;
	select cart_ID into current_id from cart where cart.email = email;
    delete from cart_product where cart_ID = current_id and cart_product.id = id;
	insert into cart_product values (default, id, current_id, quantity);
end$$
delimiter ;


drop procedure if exists select_train;
DELIMITER $$
CREATE PROCEDURE select_train(
	order_ID int)
BEGIN
	declare current_train_id int;
	declare t_ID int;
    
	select train_ID into current_train_id from train inner join 
	train_route using(route_id) where store_ID in (select store_ID from
	truck where truck_route in (select truck_route from orders where orders.order_ID = order_ID)) and 
	train.loaded_Capacity + (select tot_capacity from orders where orders.order_ID = order_ID) <= train.capacity 
	order by IF(SIGN(TIMEDIFF(train_route.depart_time, CURTIME())) = 1, 1, 0) limit 1;    
    insert into transport values (default, current_train_id);
    
    select max(transport_ID) into t_ID from transport;
    insert into order_transport values (default, t_ID, order_ID);
END $$ 
DELIMITER ;

drop procedure if exists select_truck;
DELIMITER $$
CREATE PROCEDURE select_truck(
	order_ID int)
BEGIN
	declare current_truck_id varchar(255);
    declare tot_duration int;
	
	select truck_ID into current_truck_id from truck inner join 
	truck_route tr using(truck_route) where tr.truck_route in
    (select truck_route from orders where order_ID = orders.order_ID)
    order by total_duration limit 1;
   
	select route_duration into tot_duration from truck_route where truck_route =  (select truck_route from orders where orders.order_ID=order_ID);
	update truck set total_duration = total_duration + tot_duration where truck_ID = current_truck_id;
    insert into driver_assistant values(default, current_truck_id, null, null, tot_duration);
END $$ 
DELIMITER ;

drop procedure if exists select_driver;
DELIMITER $$
CREATE PROCEDURE select_driver(
	order_ID int)
BEGIN
	declare current_nic varchar(12);
    declare tot_duration int;
    declare t_id int;
	declare last_nic varchar(12);
	select route_duration into tot_duration from truck_route where truck_route =  (select truck_route from orders where orders.order_ID=order_ID);
	
    select driver_NIC into last_nic from driver_assistant where turn_ID = (select max(turn_ID)-1 from driver_assistant);
    
	select nic into current_nic from driver where store_ID = (select store_ID from truck where
	truck_route = (select truck_route from orders where orders.order_ID = order_ID)) and 
	driver.total_duration + tot_duration <= 40 and driver.nic <> last_nic 
    order by total_duration asc limit 1;

    select max(turn_ID) into t_ID from driver_assistant;
    
    update driver set driver.total_duration = driver.total_duration + tot_duration where driver.nic = current_nic;
    
     update driver_assistant set driver_NIC = current_nic where turn_ID = t_id;
END $$ 
DELIMITER ;


drop procedure if exists select_assistant;
DELIMITER $$
CREATE PROCEDURE select_assistant(
	order_ID int)
BEGIN
	declare current_nic varchar(12);
    declare tot_duration int;
    declare t_id int;
	declare last_nic varchar(12);
	declare before_last_nic varchar(12);
	select route_duration into tot_duration from truck_route where truck_route =  (select truck_route from orders where orders.order_ID=order_ID);
	
    select assistant_NIC into last_nic from driver_assistant where turn_ID = (select max(turn_ID)-1 from driver_assistant);
    select assistant_NIC into before_last_nic from driver_assistant where turn_ID = (select max(turn_ID)-2 from driver_assistant);
    
	select nic into current_nic from assistant where store_ID = (select store_ID from truck where
	truck_route = (select truck_route from orders where orders.order_ID = order_ID)) and 
	assistant.total_duration + tot_duration <= 40 and if (assistant.nic = last_nic and assistant.nic = before_last_nic, false, true)
    order by total_duration asc limit 1;
	
    select max(turn_ID) into t_ID from driver_assistant;
    
    update assistant set assistant.total_duration = assistant.total_duration + tot_duration where assistant.nic = current_nic;
    
     update driver_assistant set assistant_NIC = current_nic where turn_ID = t_id;
END $$ 
DELIMITER ;

drop procedure if exists get_cart_items_procedure;
Delimiter $$
create procedure get_cart_items_procedure(
	email varchar(225))
begin 
	select itemTotal,price,product_description,product_name,product_weight,quantity,unit_capacity from get_cart_items where get_cart_items.email = email;
end$$
delimiter ;


DELIMITER $$
CREATE PROCEDURE assign_all(order_id int)
BEGIN
    DECLARE exit handler for sqlexception
    BEGIN
        ROLLBACK;
    END;

    START TRANSACTION;

	call select_train(order_id);
	call select_truck(order_id);
	call select_driver(order_id);
	call select_assistant(order_id);

    COMMIT;
END $$


drop procedure if exists payment_proceed;
DELIMITER $$
CREATE PROCEDURE payment_proceed(
	email varchar(225),
    prefered_deliver_date date,
    address varchar(225),
    route varchar(50),
    total_price real)
BEGIN
	declare tot_capacity real;
    select sum(quantity * unit_capacity) into tot_capacity  from product inner join cart_product using(id) inner join cart using (cart_id) where cart.email = email;
    insert into Orders values (default, address, email, curdate(), curtime(), route, tot_capacity, prefered_deliver_date, total_price);
END $$