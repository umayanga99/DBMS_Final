delimiter $$
CREATE TRIGGER cart_create
AFTER insert on customer
FOR EACH ROW
BEGIN
    INSERT INTO cart
    VALUES (new.email, default);
END $$

