import axios from 'axios'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router'
import { HomePage } from './pages/home/HomePage'
import { CheckOut } from './pages/checkout/Checkout'
import { OrdersPage } from './pages/orders/OrdersPage'
import './App.css'

function App() {
  const [cart, setCart] = useState([]);

  async function loadCart() {
    const response = await axios.get('/api/cart-items?expand=product');
    setCart(response.data);
  }

  useEffect(() => {
    loadCart();
  }, [])
  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart} loadCart={loadCart} />}></Route>
      <Route path="checkout" element={<CheckOut cart={cart} />}></Route>
      <Route path="orders" element={<OrdersPage cart={cart}/>}></Route>
    </Routes>
  )
}

export default App
