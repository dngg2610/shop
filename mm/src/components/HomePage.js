import React, { useState } from 'react';
import '../App.css';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaEye } from 'react-icons/fa';

function HomePage(props) {
  const { products } = props;
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <h1>Trang chủ</h1>

      <div className="search-container mt-4">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button">
          <FaSearch />
        </button>
      </div>

      <div className="row d-flex align-items-stretch mt-4" style={{ cursor: "pointer" }}>
        {products
          .filter((product) => (
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.id.toString().includes(searchTerm)
          )
          )
          .map((product) => (
            <div key={product.id} className="col-md-4 mb-3">
              <div className="card h-100">
                <img src={product.image} alt="Hình ảnh" className="card-img-top img-fluid" style={{ objectFit: 'cover', height: '370px' }} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Giá: {product.price} VNĐ</p>
                  <p className="card-text">{product.desc}</p>
                  <div className="button-group">
                    <Link to={`/buy/${product.id}`} className="btn btn-primary">
                      <FaShoppingCart className="icon" /> Mua hàng
                    </Link>
                    <Link to={`/product/${product.id}`} className="btn btn-secondary">
                      <FaEye className="icon" /> Xem sản phẩm
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default HomePage;
