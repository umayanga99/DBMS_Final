create index index_email on cart(email);
create index index_cart_product on cart_product(id, cart_ID);
create index index_orders on orders(customer_email, truck_route);
create index index_assistant on assistant(store_ID);
create index index_driver on driver(store_ID);
create index index_name on customer(customer_name);
