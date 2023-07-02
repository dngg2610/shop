import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import AdminPage from './components/AdminPage';
import ProductDetail from './components/ProductDetail';
import OrderForm from './components/OrderForm';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Mũ bảo hiểm', desc: 'Mô tả sản phẩm A', price: "540.000", image: process.env.PUBLIC_URL+'/images/mubh.jpg' },
    { id: 2, name: 'Giày Nike', desc: 'Mô tả sản phẩm B', price: "5.600.000", image: process.env.PUBLIC_URL+'/images/nikegiay.jpg' },
    { id: 3, name: 'Giày Adidas', desc: 'Mô tả sản phẩm C', price: "3.200.000", image: process.env.PUBLIC_URL+'/images/giayadidas.jpg' },
  ])
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">Trang chủ</Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/admin" className="nav-link">Trang admin</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<HomePage products={products} setProducts={setProducts} />} />
            <Route path="/admin" element={<AdminPage products={products} setProducts={setProducts} />} />
            <Route path="/product/:id" element={<ProductDetail products={products} />} />
            <Route path="/buy/:id" element={<OrderForm products={products} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;