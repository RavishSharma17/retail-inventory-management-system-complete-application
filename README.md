## How to verify frontend and backend integration

### Step 0
Start both fe(port 3000) and be (port 3100) using `npm run start` and setup(if not already installed) and start mysql server.

### Step 1
Add some products in the cart from the frontend.

### Step 2
Go to the checkout page, fill the details and place order.

### Step 4
open up the mysql database and check if the new user was created using `select * from users;`

### Step 5
Verify orders table and order_chairs/order_tables/order_tops etc. to see if the correct amount and quantity is reflected.