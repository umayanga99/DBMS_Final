-- Delimer $$
-- CREATE FUNCTION Add_to_cart(product_ID int, cart_ID int) RETURNS int
--     DETERMINISTIC
-- BEGIN
-- 	insert into cart_product values(product_ID, cart_ID);
-- RETURN 1;
-- END
-- $$


Deliimer $$
CREATE FUNCTION Delever_Date_Test(prefered_dilivery_date date) RETURNS int
    DETERMINISTIC
BEGIN
RETURN (select datediff(prefered_dilivery_date, curdate()) >= 7);
END
$$

CREATE FUNCTION login_authentication(email varchar(255), pass varchar(225)) RETURNS tinyint(1)
    READS SQL DATA
BEGIN
	declare flag boolean default false;
    
    if ((select count(*) from logindetail l where l.email = email and 
    l.password = pass) = 1) then
    set flag = true;
    end if;
RETURN flag;
END
$$

Delimer $$
CREATE FUNCTION Sign_authentication(
	email varchar(225),
    pass varchar(225),
    name varchar(225),
    type varchar(15),
    ID int,
    roll varchar(225)) RETURNS tinyint(1)
    DETERMINISTIC
BEGIN
	if (select login_authentication (email, pass) = 1) then
		return true;
	else
		insert into logindetail values (email, pass, 'customer');
        
        
			insert into customer values (email, name, type, ID);
            insert into cart values (email, default);
		END IF;
        return false;
	end if;
END
$$



Delimiter $$
CREATE FUNCTION Check_Roll(
	email varchar(225),
    password varchar(20)) RETURNS int
    DETERMINISTIC
BEGIN
	declare roll varchar(225);
    declare flag integer;
    select l.roll into roll from logindetail l where l.email = email  and l.password = password;
    
	if roll = 'main-manager' then set flag = 0;
    elseif roll = 'stor-manager' then set flag = 1;
    else set flag = 2;
    end if;

RETURN flag;
END
$$


Delimiter $$
CREATE FUNCTION Total_Price(
	email varchar(255)) RETURNS int
    DETERMINISTIC
BEGIN
	declare tot int;
    select sum(orders.quantity * price) into tot 
    from orders left join product 
    using (product_ID) 
    where customer_email = email;
RETURN tot;
END
$$



CREATE FUNCTION `payment_proceed` (
	product_ID int,
    cart_ID int,
    email VARCHAR(225),
	cart_ID int ,
    order_ID int ,
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
    destination varchar(255)
        )
BEGIN
    Declare id int;
    
    SELECT ID into id 
    FROM `customer` 
    WHERE email = customer_email;
    INSERT INTO `order` (order_ID,product_ID,address,customer_ID,quantity,date,time,route_ID,nearest_Branch,tot_capacity,state,prefered_dilivery_date,destination) 
    VALUES (order_ID,product_ID,address,id,quantity,date,time,route_ID,nearest_Branch,tot_capacity,state,prefered_dilivery_date,destination);

    INSERT INTO 'cart' (email,cart_ID)
    VALUES (email,cart_ID);

    DELETE from 'cart_product' where cart_ID = cart_ID;



END