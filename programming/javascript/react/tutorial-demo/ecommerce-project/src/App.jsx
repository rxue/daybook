import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { CheckOut } from './pages/Checkout'
import { OrdersPage } from './pages/OrdersPage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="checkout" element={<CheckOut />}></Route>
      <Route path="orders" element={<OrdersPage />}></Route>
    </Routes>
  )
}

export default App
