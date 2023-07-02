import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

function ProductDetail(props) {
    const { products } = props;
    const { id } = useParams();

    const product = products.find((product) => product.id.toString() === id);

    if (!product) {
        return <div>Sản phẩm không tồn tại</div>;
    }

    return (
        <div>
            <h1>Chi tiết sản phẩm</h1>
            <div>
                <img src={product.image} alt="Hình ảnh" style={{ width: '100%', maxHeight: '400px', objectFit: 'contain' }} />
                <div>
                    <h2>{product.name}</h2>
                    <p>Giá: {product.price} VNĐ</p>
                    <p>{product.desc}</p>
                    <Link to={`/buy/${product.id}`} className="btn btn-primary">
                        <FaShoppingCart className="icon" /> Mua hàng
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
