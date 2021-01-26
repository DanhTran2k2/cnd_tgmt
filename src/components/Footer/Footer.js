import React, { Component } from 'react';
import './Footer.css';
import phonecall from "../image/phone-call.png";
import thamdinh from "../image/thamdinh.png";
import { Link } from "react-router-dom";
class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="container-fluid bg-grey py-5">
                    <div className="container-footer">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="row">
                                    <div className="col-md-12 ">
                                        <div className="logo-part">
                                            <div className="fcal">
                                                <img className="img" src={phonecall} width="40"></img>
                                                <div >
                                                    <p className="textft">123456789</p>
                                                    <p className="textft">Tư vấn khách hàng</p>
                                                </div>
                                            </div>
                                            <div className="fcal">
                                                <img className="img" src={phonecall} width="40"></img>
                                                <div >
                                                    <p className="textft">123456789</p>
                                                    <p className="textft">Tư vấn khách hàng</p>
                                                </div>
                                            </div>
                                            <div className="fcal">
                                                <img className="img" src={phonecall} width="40"></img>
                                                <div >
                                                    <p className="textft">123456789</p>
                                                    <p className="textft">Tư vấn khách hàng</p>
                                                </div>
                                            </div>
                                            <br />
                                            <div className="">
                                                <img className="img" src={thamdinh} width="250"></img>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-8 px-4">
                                <div className="row">
                                    <div className="col-md-4 px-4">
                                        <p className="ft"> Chăm sóc khách hàng</p>
                                        <div className="row ">
                                            <div className="col">
                                                <ul>
                                                    <li className="listHD">
                                                        <a href="#">Hướng dẫn mua hàng</a>
                                                    </li>
                                                    <li className="listHD">
                                                        <a href="#">Chính sách đổi trả</a>
                                                    </li>
                                                    <li className="listHD">
                                                        <a href="#">Chính sách bảo hành</a>
                                                    </li>
                                                    <li className="listHD">
                                                        <a href="#">Tra cứu bảo hành</a>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-md-3 px-4">
                                        <p className="ft">Danh mục</p>
                                        <div className="row ">
                                            <div className="col">
                                                <ul>
                                                    <li className="listHD">
                                                        <Link to="/home">Trang chủ</Link>
                                                    </li>
                                                    <li className="listHD">
                                                        <Link to="/dongho">Đồng hồ</Link>
                                                    </li>
                                                    <li className="listHD">
                                                        <Link to="/phukien">Phụ kiện</Link>
                                                    </li>

                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-5 px-4">
                                        <p>Mạng xã hội</p>
                                        <div>
                                            <a href="#" class="fa fa-facebook"></a>
                                            <a href="#" class="fa fa-twitter"></a>


                                            <a href="#" class="fa fa-youtube"></a>
                                            <a href="#" class="fa fa-instagram"></a>

                                            <a href="#" class="fa fa-skype"></a>

                                        </div>

                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="svcenter">
                                        <p className="cvvt">SERVICE CENTER</p>
                                        <p>Miền Bắc: 2 Xã Đàn, Đống Đa, Hà Nội | Hotline: 0247.306.3555</p>
                                        <p>Miền Nam: 378 Lý Thái Tổ, P10, Q10 (Vòng xoay Ngã Bảy) | Hotline: 1900.0325 (Nhánh 2)</p>
                                        <p>- Giờ làm việc: 10h00 - 18h00</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="lienhe">
                                        <p className="cvvt">ĐỊA CHỈ</p>
                                        <i className="fa fa-map-marker" aria-hidden="true" />
                                        <span>17 Khái Đông 3, phường Hòa Hải, quận Ngũ Hành Sơn, TP Đà Nẵng</span>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </footer>

            </div>
        );
    }
}

export default Footer;