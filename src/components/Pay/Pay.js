import React, { Component } from 'react';
import './Pay.css';
import creditcard from './creditcard.png';
import cardqt from './cardqt.png';
import bill from './bill.png';
import qr from './qr.png';
import card from './card.png';
import qr2 from './QRCode2.png';
import qr1 from './QRCode1.png';
import { Link } from "react-router-dom";
class Pay extends Component {
    render() {
        return (
            <div className="pay">
              
                <Link to="/dongho"><p className="muahang"> <i className="fa fa-angle-double-left"></i>Tiếp tục mua hàng</p></Link>
                <div className="row">
                    <div className="col-xs-12 ">
                        <nav>
                            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">
                                    <i>
                                        <img className="icon" src={creditcard} ></img>
                                        <span className="span">Thẻ nội địa</span>
                                    </i>
                                </a>
                                <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">
                                    <i>
                                        <img className="icon" src={cardqt} ></img>
                                        <span className="span">Thẻ quốc tế</span>
                                    </i>
                                </a>
                                <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">
                                    <i>
                                        <img className="icon" src={bill} ></img>
                                        <span className="span">Trả góp bằng thẻ tín dụng</span>
                                    </i>
                                </a>
                                <a className="nav-item nav-link" id="nav-about-tab" data-toggle="tab" href="#nav-about" role="tab" aria-controls="nav-about" aria-selected="false">
                                    <i>
                                        <img className="icon" src={qr} ></img>
                                        <span className="span">Quét mã QR, ví điện tử</span>
                                    </i>
                                </a>
                            </div>
                        </nav>
                        <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <div className="row bank">
                                    <div className="col-lg-2 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                                        <a href="https://vietcombank.com.vn/VCBOnlineServices/VCBPaymentGateWayP1_Pre?id=d1c5a4bb-1136-4f3d-9922-4f0870389f9c20210121110216" data-slide-to={0}><img src="https://www.payoo.vn/v2/img/logo_banks/76x42/vietcom.png" className="img-thumbnail my-3" /></a>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                                        <a href="#lightbox" data-slide-to={1}><img src="https://www.payoo.vn/v2/img/logo_banks/76x42/abbank.png" className="img-thumbnail my-3" /></a>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                                        <a href="#lightbox" data-slide-to={2}><img src="https://www.payoo.vn/v2/img/logo_banks/76x42/agribank.png" className="img-thumbnail my-3" /></a>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                                        <a href="#lightbox" data-slide-to={3}><img src="https://www.payoo.vn/v2/img/logo_banks/76x42/vietin.png" className="img-thumbnail my-3" /></a>
                                    </div>

                                    <div className="col-lg-2 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                                        <a href="#lightbox" data-slide-to={7}><img src="https://www.payoo.vn/v2/img/logo_banks/76x42/techcom.png" className="img-thumbnail my-3" /></a>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                                        <a href="#lightbox" data-slide-to={0}><img src="https://www.payoo.vn/v2/img/logo_banks/76x42/mb.png" className="img-thumbnail my-3" /></a>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                                        <a href="#lightbox" data-slide-to={1}><img src="https://www.payoo.vn/v2/img/logo_banks/76x42/hdbank.png" className="img-thumbnail my-3" /></a>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                                        <a href="#lightbox" data-slide-to={2}><img src="https://www.payoo.vn/v2/img/logo_banks/76x42/vpbank.png" className="img-thumbnail my-3" /></a>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                                        <a href="#lightbox" data-slide-to={3}><img src="https://www.payoo.vn/v2/img/logo_banks/76x42/vib.png" className="img-thumbnail my-3" /></a>
                                    </div>

                                    <div className="col-lg-2 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                                        <a href="#lightbox" data-slide-to={7}><img src="https://www.payoo.vn/v2/img/logo_banks/76x42/maritime.png" className="img-thumbnail my-3" /></a>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                                        <a href="#lightbox" data-slide-to={7}><img src="https://www.payoo.vn/v2/img/logo_banks/76x42/nama.png" className="img-thumbnail my-3" /></a>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                                        <a href="#lightbox" data-slide-to={7}><img src="https://www.payoo.vn/v2/img/logo_banks/76x42/baca.png" className="img-thumbnail my-3" /></a>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                                        <a href="#lightbox" data-slide-to={7}><img src="https://www.payoo.vn/v2/img/logo_banks/76x42/ocean.png" className="img-thumbnail my-3" /></a>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                                        <a href="#lightbox" data-slide-to={7}><img src="https://www.payoo.vn/v2/img/logo_banks/76x42/sea.png" className="img-thumbnail my-3" /></a>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                                        <a href="#lightbox" data-slide-to={7}><img src="https://www.payoo.vn/v2/img/logo_banks/76x42/scb.png" className="img-thumbnail my-3" /></a>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                                        <a href="#lightbox" data-slide-to={7}><img src="https://www.payoo.vn/v2/img/logo_banks/76x42/ncb.png" className="img-thumbnail my-3" /></a>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                                        <a href="#lightbox" data-slide-to={7}><img src="https://www.payoo.vn/v2/img/logo_banks/76x42/ncb.png" className="img-thumbnail my-3" /></a>
                                    </div>
                                </div>

                            </div>
                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <div className="row cardbank">
                                    <div className="col-7">
                                        <div className="form-gr">
                                            <input type="text" className="form-control" id="" placeholder="số thẻ" />
                                        </div>
                                        <div className="form-gr">
                                            <input type="text" className="form-control" id="" placeholder="Tên in trên thẻ" />
                                        </div>
                                        <div className="form-gr">
                                            <input type="text" className="form-control" id="" placeholder="Ngày hết hạn" />
                                        </div>
                                        <div className="form-gr">
                                            <input type="email" className="form-control" id="email" placeholder="Email" />
                                        </div>

                                    </div>
                                    <div className="col-5">
                                        <img src={card} style={{ width: '280px', height: '170px' }}></img>
                                    </div>

                                </div>
                                <div className="next">
                                    <button class="btn btn-primary text-uppercase btn-submit" onclick="$('#next-button').trigger('click');">Tiếp tục</button>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                <p className="tragop">Chương trình trả góp lãi suất 0%:</p>
                                <p className="tragop2">Áp dụng đơn hàng có giá trị từ 2.000.000 đ hoặc 3.000.000 đ (tuỳ theo ngân hàng hỗ trợ)</p>
                                <div className="row bank">

                                    <div className="col-lg-2 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                                        <a href="#lightbox" data-slide-to={0}><img src="https://www.payoo.vn/v2/img/logo_banks/76x42/vietcom.png" className="img-thumbnail my-3" /></a>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                                        <a href="#lightbox" data-slide-to={1}><img src="https://www.payoo.vn/v2/img/logo_banks/76x42/abbank.png" className="img-thumbnail my-3" /></a>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                                        <a href="#lightbox" data-slide-to={2}><img src="https://www.payoo.vn/v2/img/logo_banks/76x42/agribank.png" className="img-thumbnail my-3" /></a>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                                        <a href="#lightbox" data-slide-to={3}><img src="https://www.payoo.vn/v2/img/logo_banks/76x42/vietin.png" className="img-thumbnail my-3" /></a>
                                    </div>

                                    <div className="col-lg-2 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                                        <a href="#lightbox" data-slide-to={7}><img src="https://www.payoo.vn/v2/img/logo_banks/76x42/techcom.png" className="img-thumbnail my-3" /></a>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                                        <a href="#lightbox" data-slide-to={0}><img src="https://www.payoo.vn/v2/img/logo_banks/76x42/mb.png" className="img-thumbnail my-3" /></a>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                                        <a href="#lightbox" data-slide-to={1}><img src="https://www.payoo.vn/v2/img/logo_banks/76x42/hdbank.png" className="img-thumbnail my-3" /></a>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                                        <a href="#lightbox" data-slide-to={2}><img src="https://www.payoo.vn/v2/img/logo_banks/76x42/vpbank.png" className="img-thumbnail my-3" /></a>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                                        <a href="#lightbox" data-slide-to={3}><img src="https://www.payoo.vn/v2/img/logo_banks/76x42/vib.png" className="img-thumbnail my-3" /></a>
                                    </div>

                                    <div className="col-lg-2 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                                        <a href="#lightbox" data-slide-to={7}><img src="https://www.payoo.vn/v2/img/logo_banks/76x42/maritime.png" className="img-thumbnail my-3" /></a>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                                        <a href="#lightbox" data-slide-to={7}><img src="https://www.payoo.vn/v2/img/logo_banks/76x42/nama.png" className="img-thumbnail my-3" /></a>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                                        <a href="#lightbox" data-slide-to={7}><img src="https://www.payoo.vn/v2/img/logo_banks/76x42/baca.png" className="img-thumbnail my-3" /></a>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                                        <a href="#lightbox" data-slide-to={7}><img src="https://www.payoo.vn/v2/img/logo_banks/76x42/ocean.png" className="img-thumbnail my-3" /></a>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                                        <a href="#lightbox" data-slide-to={7}><img src="https://www.payoo.vn/v2/img/logo_banks/76x42/sea.png" className="img-thumbnail my-3" /></a>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                                        <a href="#lightbox" data-slide-to={7}><img src="https://www.payoo.vn/v2/img/logo_banks/76x42/scb.png" className="img-thumbnail my-3" /></a>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                                        <a href="#lightbox" data-slide-to={7}><img src="https://www.payoo.vn/v2/img/logo_banks/76x42/ncb.png" className="img-thumbnail my-3" /></a>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                                        <a href="#lightbox" data-slide-to={7}><img src="https://www.payoo.vn/v2/img/logo_banks/76x42/ncb.png" className="img-thumbnail my-3" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
                                <div className="qrcode"> 
                                    <img className="payimg" src={qr1}></img>
                                    <img src={qr2}></img>                                 
                                </div>
                             
                                <div className="qrcode2"> 
                                   <span className="mbbank2">Mobile Banking</span> 
                                    <span className="mbbank">ZaloPay</span>
                                </div>
                               

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Pay;