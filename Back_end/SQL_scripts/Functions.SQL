Delimer $$
CREATE FUNCTION `Add_to_cart`(product_ID int, cart_ID int) RETURNS int
    DETERMINISTIC
BEGIN
	insert into cart_product values(product_ID, cart_ID);
RETURN 1;
END
$$

Deliimer $$
CREATE FUNCTION `login_authentication`(email varchar(255), pass varchar(225)) RETURNS tinyint(1)
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
CREATE FUNCTION `Add_to_cart`(product_ID int, cart_ID int) RETURNS int
    DETERMINISTIC
BEGIN
	insert into cart_product values(product_ID, cart_ID);
RETURN 1;
END
$$