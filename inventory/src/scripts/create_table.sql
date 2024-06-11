-- Create the Users table
CREATE TABLE users (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(50) NOT NULL
);

-- Cart
create TABLE cart (
  user_id VARCHAR(50),
  product_id int not NULL,
  quantity int not NULL
);

-- order
create table orders (
  id VARCHAR(255),
  amount int,
  user_id VARCHAR(50),
  created_at VARCHAR(50)
);

-- Note: not mentioning foreign key relation in the table definition explicitly 
-- as the assignment doesn't demand read APIs on the order table.
-- Following are the relations for the sake of clarity
-- * users.id -> orders.user_id
-- * cart.user_id -> users.id
-- * order_tables.order_id -> orders.id
-- * order_chairs.order_id -> orders.id
-- * order_tops.order_id -> orders.id

-- order tables
create table order_tables (
  id varchar(50) PRIMARY KEY,
  order_id VARCHAR(50) NOT NULL,
  table_id INT NOT NULL
);

-- order chairs
create table order_chairs (
  id varchar(50) PRIMARY KEY,
  order_id VARCHAR(50) NOT NULL,
  chair_id INT NOT NULL
);

-- order tops
create table order_tops (
  id varchar(50) PRIMARY KEY,
  order_id VARCHAR(50) NOT NULL,
  top_id INT NOT NULL
);