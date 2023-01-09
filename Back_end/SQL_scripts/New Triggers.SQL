delimiter $$
CREATE TRIGGER cart_create
AFTER insert on customer
FOR EACH ROW
BEGIN
    INSERT INTO cart
    VALUES (new.email, default);
END $$

delimiter $$
CREATE TRIGGER clear_cart_product
AFTER insert on Orders
FOR EACH ROW
BEGIN
    delete from cart_product where cart_ID = (select cart_id from cart where email = (select customer_email from orders where orders.order_id = new.order_id));
END $$