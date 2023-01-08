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


drop event if exists reset_train_load;
delimiter $$
CREATE  EVENT reset_train_load
ON SCHEDULE EVERY 1 HOUR
starts '2022-01-03 00:00:00'
DO
	begin
		UPDATE Train SET loaded_capacity = 0 where route_id in (select route_id from train_route where timediff(curtime(), depart_time) > 0);
	end $$