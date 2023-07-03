import React, { useState } from 'react';
import ReactTextareaAutosize from 'react-textarea-autosize';
import { RiEdit2Line, RiDeleteBinLine } from 'react-icons/ri';
import { v4 as uuidv4 } from 'uuid';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AdminPage(props) {
    const { products, setProducts } = props;

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

    const [nameError, setNameError] = useState('');
    const [priceError, setPriceError] = useState('');
    const [descError, setDescError] = useState('');
    const [imageError, setImageError] = useState('');
     
    const [editingIndex, setEditingIndex] = useState(-1);
    const [productId, setProductId] = useState(0);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleDescChange = (event) => {
        setDesc(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
        setPriceError('');
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };

    const handleAddProduct = () => {
        if (!name.trim()) {
            setNameError('Vui lòng nhập tên sản phẩm');
            return;
        }

        if (!desc.trim()) {
            setDescError('Vui lòng nhập mô tả sản phẩm');
            return;
        }

        if (!price.trim()) {
            setPriceError('Vui lòng nhập giá sản phẩm');
            return;
        }

        if (!/^\d+(\.\d{1,2})?$/.test(price)) {
            setPriceError('Vui lòng nhập giá hợp lệ');
            return;
        }

        if (!selectedImage) {
            setImageError('Vui lòng chọn hình ảnh');
            return;
        }

        const newProduct = {
            id: uuidv4(),
            name,
            price,
            desc,
            image: URL.createObjectURL(selectedImage),
        };

        setProducts([...products, newProduct]);
        setProductId(uuidv4());
        setName('');
        setPrice('');
        setDesc('');
        setSelectedImage(null);
        setNameError('');
        setPriceError('');
        setImageError('');
        setDescError('');
    };

    const handleEditProduct = (index) => {
        const productToEdit = products[index];
        setName(productToEdit.name);
        setDesc(productToEdit.desc);
        setSelectedImage(null);
        setEditingIndex(index);
    };

    const handleUpdateProduct = () => {
        if (!name.trim()) {
            setNameError('Vui lòng nhập tên sản phẩm');
            return;
        }

        if (!desc.trim()) {
            setDescError('Vui lòng nhập mô tả sản phẩm');
            return;
        }

        if (!price.trim()) {
            setPriceError('Vui lòng nhập giá sản phẩm');
            return;
        }

        if (!/^\d+(\.\d{1,2})?$/.test(price)) {
            setPriceError('Vui lòng nhập giá hợp lệ');
            return;
        }

        if (!selectedImage) {
            setImageError('Vui lòng chọn hình ảnh');
            return;
        }

        const updatedProducts = [...products];
        updatedProducts[editingIndex] = {
            name,
            price,
            desc,
            image: URL.createObjectURL(selectedImage),
        };

        setProducts(updatedProducts);
        setName('');
        setDesc('');
        setPrice('');
        setSelectedImage(null);
        setImageError('');
        setEditingIndex(-1);
    };

    const handleDeleteProduct = (index) => {
        const updatedProducts = [...products];
        updatedProducts.splice(index, 1);
        setProducts(updatedProducts);

        if (editingIndex === index) {
            setEditingIndex(-1);
        }
    };

    return (
        <div className="container">
            <h2>Trang admin</h2>

            <div className="mb-3">
                <h3>Thêm và chỉnh sửa sản phẩm</h3>

                <label htmlFor="nameInput" className="form-label">
                    Tên sản phẩm:
                </label>
                <input
                    type="text"
                    id="nameInput"
                    value={name}
                    onChange={handleNameChange}
                    className={`form-control ${nameError ? 'is-invalid' : ''}`}
                />
                {nameError && <div className="invalid-feedback">{nameError}</div>}

                <label htmlFor="descInput" className="form-label">
                    Thêm mô tả:
                </label>
                <ReactTextareaAutosize
                    id="descInput"
                    value={desc}
                    onChange={handleDescChange}
                    className={`form-control ${descError ? 'is-invalid' : ''}`}
                    rows={3}
                />
                {descError && <div className="invalid-feedback">{descError}</div>}

                <label htmlFor="priceInput" className="form-label">
                    Giá sản phẩm:
                </label>
                <div className="input-group">
                    <input
                        type="text"
                        id="priceInput"
                        value={price}
                        onChange={handlePriceChange}
                        className={`form-control ${priceError ? 'is-invalid' : ''}`}
                    />
                    <span className="input-group-text">VNĐ</span>
                </div>
                {priceError && <div className="invalid-feedback">{priceError}</div>}

                <label htmlFor="imageInput" className="form-label">
                    Chọn hình ảnh:
                </label>
                <input
                    type="file"
                    id="imageInput"
                    accept="image/*"
                    onChange={handleImageChange}
                    className={`form-control ${imageError ? 'is-invalid' : ''}`}
                />
                {imageError && <div className="invalid-feedback">{imageError}</div>}

                <button
                    onClick={editingIndex === -1 ? handleAddProduct : handleUpdateProduct}
                    className="btn btn-primary mt-3"
                >
                    {editingIndex === -1 ? 'Thêm' : 'Cập nhật'}
                </button>
            </div>

            <h3>Danh sách sản phẩm:</h3>
            <div className="row">
                {products.map((product, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card mt-4" style={{ width: '100%',cursor:'pointer' }} >
                            <img
                                src={product.image}
                                alt="Hình ảnh"
                                className="card-img-top"
                                style={{ objectFit: 'cover', height: '370px' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">Giá: {product.price} VNĐ</p>
                                <p className="card-text">{product.desc}</p>
                                <div className="d-flex justify-content-between">
                                    <button onClick={() => handleEditProduct(index)} className="btn btn-primary">
                                        <RiEdit2Line /> Sửa
                                    </button>
                                    <button onClick={() => handleDeleteProduct(index)} className="btn btn-danger">
                                        <RiDeleteBinLine /> Xóa
                                    </button>
                                </div>
                                <Link to={`/product/${product.id}`} className="btn btn-secondary mt-3">
                                    <FaEye className="icon" /> Xem sản phẩm
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>);
}

export default AdminPage;