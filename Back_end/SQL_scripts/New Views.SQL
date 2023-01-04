drop view if exists Most_Ordered;  
create view Most_Ordered as
select year(o.ordered_date) as year, p.Product_name, sum(op.quantity) as total_orders
from order_product op inner join orders o using(order_ID) inner join product p using(product_ID) group by year, product_name
order by total_sells desc limit 5;

create view Quarterly_sales_report as
select year(o.ordered_date) as year,
	quarter(o.ordered_date) as quarter, 
    sum(op.quantity) as total_quantity,
    sum(op.quantity * p.price) as total_income
from order_product op inner join orders o using(order_ID) inner join product p using(product_ID) 
group by year, quarter;

drop view if exists Quarter_Order_Details;  
create view Quarter_Order_Details as
select year(o.ordered_date) as year,
	quarter(o.ordered_date) as quarter, 
    p.product_name as product,
    sum(op.quantity) as soldquarter_order_details
from order_product op inner join orders o using(order_ID) inner join product p using(product_ID) 
group by year, quarter, product;
<<<<<<< HEAD

-- ksdkflksndkfnksdnfklnjsldjf
=======
>>>>>>> Shehan_23

--ksdkflksndkfnksdnfklnjsldjf