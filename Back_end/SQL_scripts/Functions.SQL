Delimer $$
CREATE FUNCTION Add_to_cart(product_ID int, cart_ID int) RETURNS int
    DETERMINISTIC
BEGIN
	insert into cart_product values(product_ID, cart_ID);
RETURN 1;
END
$$

Deliimer $$
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
	declare exist tinyint(1);
	if (select login_authentication (email, pass) = 1) then
		return true;
	else
		insert into logindetails values (email, pass, roll);
        insert into customer values (email, name, type, ID);
        insert into cart values (email, default);
        return false;
	end if;
END
$$

Deliimer $$
CREATE FUNCTION Delever_Date_Test(prefered_dilivery_date date) RETURNS int
    DETERMINISTIC
BEGIN
RETURN (select datediff(prefered_dilivery_date, curdate()) >= 7);
END
$$

Delimiter $$
CREATE FUNCTION `Is_Manger`(
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

