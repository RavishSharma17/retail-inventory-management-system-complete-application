import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../store/cartSlice';
import axios from 'axios';
import './Checkout.css';

function Checkout() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const [user, setUser] = useState({ name: '', email: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        // eslint-disable-next-line
      const order = {
        user,
        items: cart
      };

      // As there is not session implementation, use a new user_id for each click.
      const user_id = (Math.random() + 1).toString(36).substring(7);

      // when checking out add all items to cart first then checkout.
      console.log(order);
        Promise.all(order.items.map(cartItem => {
            return axios.post('http://localhost:3100/cart', {
                "user_id": user_id,
                "product_id": cartItem.id,
                "quantity": cartItem.quantity
                });
        })).then((values) => {
                // checkout and populate the databse
                return axios.post('http://localhost:3100/checkout', {...user, "user_id": user_id})
            .then((val) => {
                // clear cart db
                return axios.delete(`http://localhost:3100/cart/clear?user_id=${user_id}`);
            });
        });

      dispatch(clearCart());
      alert('Order placed successfully!');
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order.');
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input type="text" name="name" value={user.name} onChange={handleInputChange} required />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" name="email" value={user.email} onChange={handleInputChange} required />
          </label>
        </div>
        <h2>Cart</h2>
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.name} - ₹{item.price} x {item.quantity}
            </li>
          ))}
        </ul>
        <h4>Total: ₹{totalAmount.toFixed(2)}</h4>
        <button type="submit">Place Order</button>
        <button type="button" onClick={handleClearCart}>Clear Cart</button>
      </form>
    </div>
  );
}

export default Checkout;
