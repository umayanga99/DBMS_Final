delimiter $$
CREATE TRIGGER cart_create
AFTER insert on customer
FOR EACH ROW
BEGIN
    INSERT INTO cart
    VALUES (new.email, default);
END $$

DELIMITER $$
CREATE TRIGGER product_count_after_order
AFTER UPDATE ON orders
FOR EACH ROW
BEGIN
	UPDATE product
    SET quantity = quantity  - orders.quantity
    WHERE product_ID = new.product_ID;
END
$$

delimiter ;
