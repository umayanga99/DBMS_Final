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

Delimiter $$
CREATE FUNCTION Sign_authentication(
	email varchar(255),
    pass varchar(255),
    customer_name varchar(255),
    customer_type varchar(15),
    TP int) 
RETURNS tinyint(1)
DETERMINISTIC
BEGIN
	if (select login_authentication (email, pass) = 1) then
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
$$

