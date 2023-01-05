CREATE EVENT reset_driver_assistant_hours
ON SCHEDULE EVERY 1 WEEK
starts '2023-01-02 00:00:00'
DO
    UPDATE Assistant SET total_duration = 0;
    UPDATE Driver SET total_duration = 0;
    UPDATE Truck SET total_duration = 0;

ALTER EVENT reset_driver_assistant_hours ENABLE;
