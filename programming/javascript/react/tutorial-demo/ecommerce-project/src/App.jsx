import axios from 'axios'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { CheckOut } from './pages/Checkout'
import { OrdersPage } from './pages/OrdersPage'
import './App.css'

function App() {
  const [cart, setCart] = useState([]);
      useEffect(() => {
        axios.get('/api/cart-items?expand=product')
            .then(response => {
                setCart(response.data);
            });    
    }, [])
  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart} />}></Route>
      <Route path="checkout" element={<CheckOut cart={cart} />}></Route>
      <Route path="orders" element={<OrdersPage cart={cart}/>}></Route>
    </Routes>
  )
}

export default App
