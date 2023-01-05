create or replace view orders_order_product as
select id,
	order_id,
    quantity,
    customer_address,
    customer_email,
    ordered_date,
    truck_route,
    tot_capacity,
    price,
    product_name,
    product_weight,
    product_description,
    unit_capacity
from order_product op inner join orders o using(order_ID) 
inner join product p using(id);


create or replace view Most_Ordered as
select year(ordered_date) as year, 
    Product_name, 
    sum(quantity) as total_quantity from 
orders_order_product
group by year, product_name
order by total_quantity;


create view Quarterly_sales_report as
select year(o.ordered_date) as year,
	quarter(o.ordered_date) as quarter, 
    sum(op.quantity) as total_quantity,
    sum(op.quantity * p.price) as total_income
from order_product op inner join orders o using(order_ID) 
inner join product p using(id) 
group by year, quarter;


drop view if exists Quarter_Order_Details;  
create view Quarter_Order_Details as
select year(o.ordered_date) as year,
	quarter(o.ordered_date) as quarter, 
    p.product_name as product,
    sum(op.quantity) as soldquarter_order_details
from order_product op inner join orders o using(order_ID) 
inner join product p using(id) 
group by year, quarter, product;


drop view if exists products_details;
create view products_details as 
select p.id, 
    price, 
    product_name, 
    product_weight,
    product_description, 
    unit_capacity, 
    pi.product_image
 from product p inner join product_image pi group by id order by id;


drop view if exists get_cart_items;
create view get_cart_items as
select id, 
    cp.quantity * p.price as 'itemTotal', 
    price, 
    product_description, 
    product_name, 
    product_weight, 
    quantity, 
    unit_capacity 
from cart inner join cart_product cp using(cart_ID) 
inner join product p using (id);


drop view if exists working_hours;
create view Working_Hours as 
    select 'truck' as roll, truck_ID as ID, total_duration from truck union
    select 'driver', nic, total_duration from driver union
    select 'assistant', nic, total_duration from assistant; 


drop view if exists Customer_Order_Report;
create view Customer_Order_Report as
select customer_email, 
    customer_name, 
    customer_type, 
    ordered_date, 
    product_name, 
    quantity, 
    price*quantity as 'total_price'  from
customer c inner join orders o on c.email = o.customer_email 
inner join order_product using(order_ID) 
inner join product using(id) order by ordered_date desc;


drop view if exists report_cities_routes;
create view report_cities_routes as 
select city, truck_route, product_name, year(ordered_date) as year, sum(quantity) as tot_orders from 
store inner join truck using(store_ID)
inner join orders using(truck_route)
inner join order_product using(order_ID)
inner join product using(id) 
group by city, truck_route, product_name;
