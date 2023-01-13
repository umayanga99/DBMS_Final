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
order by total_quantity desc
limit 5;


create or replace view Quarterly_sales_report as
select year(ordered_date) as year,
	quarter(ordered_date) as quarter, 
    sum(quantity) as total_quantity,
    sum(quantity * price) as total_income
from orders_order_product
group by year, quarter
order by year, quarter;


create or replace view Quarter_Order_Details as
select year(ordered_date) as year,
	quarter(ordered_date) as quarter, 
    product_name as product,
    sum(quantity) as total_sells,
    sum(quantity * price) as total_income
from orders_order_product
group by year, quarter, product
order by year, quarter, total_income;


create or replace view products_details as 
select p.id, 
    price, 
    product_name, 
    product_weight,
    product_description, 
    unit_capacity, 
    pi.product_image
 from product p inner join product_image pi group by id order by id;


create or replace view get_cart_items as
select email,
    id, 
    cp.quantity * p.price as 'itemTotal', 
    price, 
    product_description, 
    product_name, 
    product_weight, 
    quantity, 
    unit_capacity 
from cart inner join cart_product cp using(cart_ID) 
inner join product p using (id);



create or replace view Working_Hours as 
    select 'truck' as roll, truck_ID as ID, total_duration from truck union
    select 'driver', nic, total_duration from driver union
    select 'assistant', nic, total_duration from assistant; 


create or replace view Customer_Order_Report as
select year(ordered_date) as year,
	customer_email, 
    customer_name, 
    customer_type, 
    ordered_date, 
    product_name, 
    quantity, 
    price*quantity as 'total_price'  from
customer c inner join orders_order_product o on c.email = o.customer_email 
order by ordered_date desc;


create or replace view cities_routes_report as 
select city, 
    truck_route, 
    product_name, 
    year(ordered_date) as year, 
    sum(quantity) as tot_orders,
    sum(quantity * price) as total_income from
store inner join truck using(store_ID)
inner join orders_order_product using(truck_route) 
group by city, truck_route, product_name;


create or replace view train_schedule as
select train_id, capacity, depart_time, store_name as destination_store from 
train inner join train_route using(route_id) inner join store using(store_id)
group by train_id, store_id;


create or replace view truck_report as
select truck_id, city, truck_route, total_duration from 
store inner join truck using(store_id) inner join truck_route using(truck_route)
<<<<<<< HEAD
group by truck_id, store_name, truck_route;
=======
group by truck_id, store_name, truck_route;
>>>>>>> Shehan_23
