import React, { Component } from 'react';
import index1 from './index1.jpg';
import './Checkout.css';
import { Link } from 'react-router-dom';
class Tragop extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-7 order-md-2 mb-4">
                        <h4 className="contentt">Thông tin giỏ hàng</h4>
                        <div className="boder-gh">
                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text-muted"></span>
                                <span className="badge badge-secondary badge-pill"></span>
                            </h4>
                            <ul className="list-group mb-3">
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <img src="https://www.dangquangwatch.vn/upload/img_big/1524156410_dong-ho-chinh-hang-5.jpg" style={{ width: '90px', height: '100px' }}></img>
                                    </div>
                                    <span>Casio MTP-1384D-7AVDF</span>
                                    <div className="col-3 col-sm-3 col-md-3">
                                        <div className="">

                                            <input type="number" step={1} max={99} min={1} defaultValue={1} title="Qty" className="qty" size={3} />

                                        </div>
                                    </div>
                                    <span className="text-muted">1.654.000đ</span>
                                    <div className="col-2 col-sm-2 col-md-2 text-right">
                                        <button type="button" className="btn btn-outline-danger btn-xs">
                                            <i className="fa fa-trash" aria-hidden="true" />
                                        </button>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <img src="https://www.dangquangwatch.vn/upload/img_big/418349542_dong-ho-chinh-hang-1.jpg" style={{ width: '90px', height: '100px' }}></img>
                                    </div>
                                    <span>Casio MTP-1384D-7AVDF</span>
                                    <div className="col-3 col-sm-3 col-md-3">
                                        <div className="">

                                            <input type="number" step={1} max={99} min={1} defaultValue={1} title="Qty" className="qty" size={3} />

                                        </div>
                                    </div>

                                    <span className="text-muted">1.654.000đ</span>
                                    <div className="col-2 col-sm-2 col-md-2 text-right">
                                        <button type="button" className="btn btn-outline-danger btn-xs">
                                            <i className="fa fa-trash" aria-hidden="true" />
                                        </button>
                                    </div>
                                </li>

                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                </li>

                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Tổng  (VND)</span>
                                    <strong>$20</strong>
                                </li>
                            </ul>
                            <form className="card p-2">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Mã giảm giá" />
                                    <div className="input-group-append">
                                        <button type="submit" className="btn btn-secondary">Áp dụng</button>
                                    </div>
                                </div>

                            </form>

                            <div className="thanhtoan">
                                <Link to="checkout-success"><button className="btn btn-warning" name="payment" value={1} type="submit">
                                    <p className="dathang">ĐẶT HÀNG THANH TOÁN SAU</p>
                                    <p className="dathang">(Trả tiền khi nhận hàng tại nhà)</p>
                                </button></Link>
                                <Link to="Pay"><button className="btn btn-primary" name="payment" value={1} type="submit">
                                    <p className="dathang">THANH TOÁN ONLINE</p>
                                    <p className="dathang">(Bằng thẻ ATM, VISA, Master)</p>
                                </button></Link>
                            </div>


                            <hr />
                            <a href="#">Tiếp tục mua hàng</a>
                        </div>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <h4 className="contentt">Thông tin khách hàng</h4>
                        <form className="needs-validation was-validated" noValidate>
                            <div className="mb-3">
                                <label htmlFor="number">Họ và tên</label>
                                <input type="text" className="form-control" id="phone" placeholder="Họ và tên" required />
                                <div className="invalid-feedback">
                                    Bắt buộc *
                            </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                                <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                                <div className="invalid-feedback">

                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address">Địa chỉ</label>
                                <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                                <div className="invalid-feedback">
                                    Bắt buộc *
                            </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="number">Số điện thoại</label>
                                <input type="text" className="form-control" id="phone" placeholder="" required />
                                <div className="invalid-feedback">
                                    Bắt buộc *
                            </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="country">Thành phố</label>
                                    <select className="custom-select d-block w-100" id="country" required>
                                        <option value>Choose...</option>
                                        <option>Đà Nẵng</option>

                                    </select>
                                    <div className="invalid-feedback">
                                        Bắt buộc *
                                </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="state">Quận</label>
                                    <select className="custom-select d-block w-100" id="state" required>
                                        <option value>Choose...</option>
                                        <option>Ngũ Hành Sơn</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Bắt buộc *
                                </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="state">Phường</label>
                                    <select className="custom-select d-block w-100" id="state" required>
                                        <option value>Choose...</option>
                                        <option>Hòa Hải</option>
                                        <option>Hòa Quý</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Bắt buộc *
                                </div>
                                </div>
                            </div>
                            <hr className="mb-4" />
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" id="same-address" />
                                <label htmlFor="same-address"> Lưu thông tin cho lần sau</label>
                            </div>

                            <hr className="mb-4" />
                            {/* <h4 className="mb-3">Payment</h4>
                            <div className="d-block my-3">
                                <div className="custom-control custom-radio">
                                    <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" defaultChecked required />
                                    <label className="custom-control-label" htmlFor="credit">Credit card</label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required />
                                    <label className="custom-control-label" htmlFor="debit">Debit card</label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required />
                                    <label className="custom-control-label" htmlFor="paypal">Paypal</label>
                                </div>
                            </div> */}
                            {/* <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="cc-name">Name on card</label>
                                    <input type="text" className="form-control" id="cc-name" placeholder required />
                                    <small className="text-muted">Full name as displayed on card</small>
                                    <div className="invalid-feedback">
                                        Name on card is required
                                </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="cc-number">Credit card number</label>
                                    <input type="text" className="form-control" id="cc-number" placeholder required />
                                    <div className="invalid-feedback">
                                        Credit card number is required
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="cc-expiration">Expiration</label>
                                    <input type="text" className="form-control" id="cc-expiration" placeholder required />
                                    <div className="invalid-feedback">
                                        Expiration date required
                                </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="cc-expiration">CVV</label>
                                    <input type="text" className="form-control" id="cc-cvv" placeholder required />
                                    <div className="invalid-feedback">
                                        Security code required
                                </div>
                                </div>
                            </div> */}
                            {/* <hr className="mb-4" /> */}

                        </form>

                    </div>
                </div>
            </div>
        );
    }
}

export default Tragop;