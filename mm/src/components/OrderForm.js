import React, { useState } from 'react';

function OrderForm() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = () => {
    if (!fullName || !phone || !email || !address) {
      alert('Vui lòng điền đầy đủ thông tin');
      return;
    }

    // Gửi thông tin đặt hàng đến API hoặc xử lý dữ liệu theo nhu cầu của bạn

    alert('Đặt hàng thành công!');
    setFullName('');
    setPhone('');
    setEmail('');
    setAddress('');
    setNote('');
  };

  return (
    <div>
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

        <button onClick={handleSubmit} className="btn btn-primary">Đặt hàng</button>
      </form>
    </div>
  );
}

export default OrderForm;
