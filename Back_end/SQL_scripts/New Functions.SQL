Delimiter $$
CREATE FUNCTION login_authentication(email varchar(255), pass varchar(225))
	RETURNS tinyint(1)
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
    TP varchar(20)) 
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
