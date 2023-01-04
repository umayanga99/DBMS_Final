Delimiter $$
create procedure Add_To_Cart(
	id int,
    cart_ID int)
begin 
	insert into cart_product values (id, cart_ID, default);
end$$
delimiter ;


DELIMITER $$
CREATE PROCEDURE save_cart(
	email varchar(225),
    arr VARCHAR(255))
BEGIN
	DECLARE i INT DEFAULT 1;
	DECLARE inner_array VARCHAR(255);
	DECLARE j INT DEFAULT 1;
	DECLARE element INT;
    declare cart_id int;
       
    select c.cart_ID into cart_id from cart c where c.email = email limit 1;
	
	WHILE i <= LENGTH(my_array) DO
		SET inner_array = SUBSTRING_INDEX(SUBSTRING_INDEX(my_array, '|', i), '|', -1);
        insert into cart_product values (default, SUBSTRING_INDEX(SUBSTRING_INDEX(inner_array, ',', 1), ',', -1), SUBSTRING_INDEX(SUBSTRING_INDEX(inner_array, ',', 2), ',', -1));
		SET i = i + 1;
	END WHILE;
END $$ 
DELIMITER ;

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

