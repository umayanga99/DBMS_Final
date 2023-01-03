Delimiter $$
create procedure Add_To_Cart(
	product_ID int,
    cart_ID int)
begin 
	insert into cart_product values (product_ID, cart_ID, default);
end$$
delimiter ;

--sdjhfjsjdfjhsdjf