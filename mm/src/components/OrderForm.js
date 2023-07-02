import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function OrderForm() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [note, setNote] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName || !phone || !email || !address) {
      toast.error('Vui lòng điền đầy đủ thông tin');
      return;
    }

    setIsSuccess(true);
    toast.success('Đặt hàng thành công!');

    // Xử lý các lệnh khác sau khi đặt hàng thành công
    setFullName('');
    setPhone('');
    setEmail('');
    setAddress('');
    setNote('');
  };


  return (
    <div>
      <ToastContainer />
      <h3>Thông tin người mua</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="fullNameInput" className="form-label">Họ và tên:</label>
          <input
            type="text"
            id="fullNameInput"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phoneInput" className="form-label">Số điện thoại:</label>
          <input
            type="tel"
            id="phoneInput"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">Email:</label>
          <input
            type="email"
            id="emailInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="addressInput" className="form-label">Địa chỉ giao hàng:</label>
          <textarea
            id="addressInput"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="form-control"
            rows={3}
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="noteInput" className="form-label">Ghi chú:</label>
          <textarea
            id="noteInput"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="form-control"
            rows={3}
          ></textarea>
        </div>

        <button onClick={handleSubmit} className="btn btn-primary">
          <FaShoppingCart className="icon" /> Đặt hàng
        </button>

      </form>
    </div>
  );
}

export default OrderForm;
