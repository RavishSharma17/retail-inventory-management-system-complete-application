import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './store/cartSlice';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Checkout from './components/Checkout';
import Cart from './components/Cart';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);
  const cart = useSelector(state => state.cart);

  const categorizedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const NavLink = ({ to, children }) => {
    const location = useLocation();
    return (
      <Link to={to} className={location.pathname === to ? 'active' : ''}>
        {children}
      </Link>
    );
  };

  return (
    <Router>
      <div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/checkout">Checkout</NavLink>
          <Link to="/cart" className="cart-button">
            View Cart ({cartItemCount})
          </Link>
        </nav>
        <div className="container">
          <Routes>
            <Route 
              path="/" 
              element={
                <div>
                  <h1>Product List</h1>
                  {Object.keys(categorizedProducts).map(category => (
                    <div key={category}>
                      <h2>{category}</h2>
                      <div className="product-list">
                        {categorizedProducts[category].map(product => (
                          <div className="product-card" key={product.id}>
                            <h3>{product.name}</h3>
                            <p>₹{product.price}</p>
                            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              }
            />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
