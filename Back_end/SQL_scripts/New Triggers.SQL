delimiter $$
CREATE TRIGGER cart_create
AFTER insert on customer
FOR EACH ROW
BEGIN
    INSERT INTO cart
    VALUES (new.email, default);
END $$

drop trigger clear_cart_product;
delimiter $$
CREATE TRIGGER clear_cart_product_update_order_product
AFTER insert on Orders
FOR EACH ROW
BEGIN
	declare c_order_id int;
    declare n_order_id int;
    set n_order_id = new.order_id;
    select max(order_id) into c_order_id from orders;
    insert into order_product (order_id, id, quantity)
    select c_order_id, cp.id, cp.quantity from cart_product cp where cart_ID = (select cart_id from cart where email = (select customer_email from orders where orders.order_id = n_order_id));
    delete from cart_product where cart_ID = (select cart_id from cart where email = (select customer_email from orders where orders.order_id = n_order_id));
END $$