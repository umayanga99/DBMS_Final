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