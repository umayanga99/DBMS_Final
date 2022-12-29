drop view if exists Most_Ordered;  
create view Most_Ordered as
select year(o.ordered_date) as year, p.Product_name, sum(op.quantity) as total_orders
from order_product op inner join orders o using(order_ID) inner join product p using(product_ID) group by year, product_name
order by total_sells desc limit 5;


