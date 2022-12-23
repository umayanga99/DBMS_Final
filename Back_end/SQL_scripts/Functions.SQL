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
