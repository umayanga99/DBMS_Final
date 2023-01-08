drop event if exists reset_working_hours;
delimiter $$
CREATE  EVENT reset_working_hours
ON SCHEDULE EVERY 1 WEEK
starts '2022-01-03 00:00:00'
DO
	begin
		UPDATE Driver SET total_duration = 0;
		UPDATE Truck SET total_duration = 0;
		UPDATE Assistant SET total_duration = 0;
	end $$

delimiter $$
CREATE  EVENT reset_train_load
ON SCHEDULE EVERY 1 DAY
starts '2022-01-03 00:00:00'
DO
	begin
		UPDATE Train SET loaded_capacity = 0;
	end $$
