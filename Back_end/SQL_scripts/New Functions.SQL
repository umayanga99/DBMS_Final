Delimiter $$
CREATE FUNCTION login_authentication(email varchar(255), pass varchar(225)) RETURNS tinyint(1)
    READS SQL DATA
BEGIN
	declare flag int default 0;
    
    if ((select count(*) from customer c where c.email = email and 
    c.customer_password = pass) = 1) then
		if (select customer_type from customer where customer.email = email) = 'manager' then set flag = 1;
        else set flag = 2;
        end if;

    end if;
RETURN flag;
END
$$

drop function if exists Sign_authentication;
Delimiter $$
CREATE FUNCTION Sign_authentication(
	email varchar(255),
    pass varchar(255),
    customer_name varchar(255),
    customer_type varchar(15),
    TP int(10)) 
RETURNS tinyint(1)
DETERMINISTIC
BEGIN
	if ((select count(*) from customer c where c.email = email) = 1) then
		return true;
	else
		insert into customer values (email, customer_name,  customer_type, pass, TP);
        return false;
	end if;
END
$$

Delimiter $$
CREATE FUNCTION Total_Price(
	email varchar(255)) RETURNS int
    DETERMINISTIC
BEGIN
	declare tot int;
    select sum(OP.quantity * P.price) into tot 
    from Orders O right join Order_Product OP using (order_ID) 
    left join Product P using (id) 
    where O.customer_email = email;
RETURN tot;
END
<<<<<<< HEAD
$$
=======
$$

-- drop function if exists payment_proceed;

-- DELIMITER $$
-- CREATE FUNCTION payment_proceed(
-- 	email varchar(225),
--     prefered_deliver_date date,
--     address varchar(225),
--     route varchar(50),
--     total_price real)
-- returns boolean
-- deterministic
-- BEGIN    
-- 	declare flag boolean default fault;
-- 	-- update orders table
--     declare tot_capacity real;
--     declare last_order_id int;
--     declare current_cart_id int;
    
--     -- assign train
--     declare current_train_id int;
-- 	declare current_transport_ID int;
--     declare total_capacity int;
    
--     -- assign truck
--     declare current_truck_id varchar(255);
--     declare tot_duration int;
--     declare current_delivery_id int;
    
--     -- assign driver
--     declare current_driver_nic varchar(12);
--     declare current_turn_id int;
-- 	declare last_driver_nic varchar(12);
    
--     -- assign assistant
--     declare current_assistant_nic varchar(12);
-- 	declare last_assistant_nic varchar(12);
-- 	declare before_last_assistant_nic varchar(12);
    
--     DECLARE exit handler for sqlexception
--     BEGIN
--         ROLLBACK;
--     END;

--     START TRANSACTION;
		
-- 	-- update Orders table ---------------------------------------------------------------
-- 		select  sum(quantity * unit_capacity),  cart_ID into tot_capacity, current_cart_id  from product inner join cart_product using(id) inner join cart using (cart_id) where cart.email = email;
-- 		insert into Orders values (default, address, email, curdate(), curtime(), route, tot_capacity, prefered_deliver_date, total_price);
        
--         select max(order_id) into last_order_id from orders where customer_email = email;
-- 	-- assign train -----------------------------------------------------------------------
-- 		select train_ID into current_train_id from train inner join 
-- 		train_route using(route_id) where store_ID in (select store_ID from
-- 		truck where truck_route = route) and 
-- 		train.loaded_Capacity + tot_capacity <= train.capacity 
-- 		order by IF(SIGN(TIMEDIFF(train_route.depart_time, CURTIME())) = 1, 1, 0) limit 1;    
-- 		insert into transport values (default, current_train_id);
-- 		select max(transport_ID) into current_transport_ID from transport;
-- 		insert into order_transport values (default, current_transport_ID, last_order_id);
-- 		update train set loaded_capacity = loaded_capacity + total_capacity where train_ID = current_train_id;


-- 		if ((select count(truck_ID) from  truck inner join driver_assistant using(truck_ID) where truck_route = route and delivery_date=curdate()) = 0) then
        
-- 			-- assign truck -------------------------------------------------------------------------
-- 				select truck_ID into current_truck_id from truck inner join 
-- 				truck_route using(truck_route) where truck_route = route
-- 				order by total_duration limit 1;
                
-- 				insert into delivery values (default, email, current_truck_id);
-- 				select max(delivery_number) into current_delivery_id from delivery;
-- 				insert into order_delivery values (default, last_order_id, current_delivery_id);
-- 				select route_duration into tot_duration from truck_route where truck_route = route;
-- 				update truck set total_duration = total_duration + tot_duration where truck_ID = current_truck_id;
-- 				insert into driver_assistant values(default, current_truck_id, null, null, tot_duration, curdate());

-- 			-- assign driver ------------------------------------------------------------------------------
-- 				select driver_NIC into last_driver_nic from driver_assistant where turn_ID = (select max(turn_ID)-1 from driver_assistant);
-- 				select nic into current_driver_nic from driver where store_ID = (select store_ID from truck where
-- 				truck_route = route) and 
-- 				driver.total_duration + tot_duration <= 40 and if (driver.nic = last_driver_nic, false, true)
-- 				order by total_duration asc limit 1;
-- 				select max(turn_ID) into current_turn_id from driver_assistant;
-- 				update driver set driver.total_duration = driver.total_duration + tot_duration where driver.nic = current_driver_nic;
-- 				update driver_assistant set driver_NIC = current_driver_nic where turn_ID = current_turn_id;
			
-- 			-- assign assistant ----------------------------------------------------------------------------
-- 				select assistant_NIC into last_assistant_nic from driver_assistant where turn_ID = (select max(turn_ID)-1 from driver_assistant);
-- 				select assistant_NIC into before_last_assistant_nic from driver_assistant where turn_ID = (select max(turn_ID)-2 from driver_assistant);
-- 				select nic into current_assistant_nic from assistant where store_ID = (select store_ID from truck where
-- 				truck_route = route) and 
-- 				assistant.total_duration + tot_duration <= 60 and if (assistant.nic = last_assistant_nic and assistant.nic = before_last_assistant_nic, false, true)
-- 				order by total_duration asc limit 1;
-- 				update assistant set assistant.total_duration = assistant.total_duration + tot_duration where assistant.nic = current_assistant_nic;
-- 				update driver_assistant set assistant_NIC = current_assistant_nic where turn_ID = current_turn_id;
                
--                 set flag = true;
                
-- 		else 
-- 				select truck_id into current_truck_id from truck inner join driver_assistant using(truck_ID) where truck_route = route and date=curdate();
-- 				insert into delivery values (default, email, current_truck_id);
                
--                 set flag = true;
--         end if;
--     COMMIT;   
-- return flag;
-- end $$
>>>>>>> Shehan_23
