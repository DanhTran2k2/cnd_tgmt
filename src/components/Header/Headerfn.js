import React, { Component } from 'react';
import cart from "./cart.png";
import { NavLink, Link } from "react-router-dom";

class Headerfn extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid bg-grey py-2">
                    <div className="header-top">
                        <div className="row">
                            <div className="col-md-6">
                                <Link to="/home"><p className="logoheader"> CDN WATCH</p></Link>
                            </div>
                            <div className="col-md-6 right-header">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="timkiem">
                                            <a href="#"><i className="fa fa-search" aria-hidden="true" /></a>
                                            <input type="search" className="search" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Tìm kiếm" />

                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="diachi">
                                            <Link to="/lienhe"><i className="fa fa-map-marker" aria-hidden="true" />
                                                <span className="diachi-text">Cửa hàng</span></Link>

                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="diachi">
                                            <Link to ="/checkout"><img src={cart} />
                                                <span className="giohang">2</span></Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="header-bottom">
                    <div className=" bottom">
                        <div className="row">
                            <div className="col-md-12">
                                <div>
                                <ul className="nav nav-fill">
                                    <li>
                                        <NavLink  className="nav-link "to="/home"><i className="fa fa-home" aria-hidden="true" />
                                        </NavLink>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link  dropdown-toggle nav-link text-uppercase" to="" data-toggle="dropdown"> Thương hiệu  </a>
                                        <ul className="dropdown-menu">
                                            <li><Link to="/casio" className="dropdown-item" href="#"> CASIO</Link></li>
                                            <li><a className="dropdown-item" href="#"> BENTLEY </a></li>
                                            <li><a className="dropdown-item" href="#"> CASIO </a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link text-uppercase mau" to="/spnam"  activeStyle={{
                                            fontWeight: "bold",
                                            color: "red"
                                        }}>ĐỒng hồ nam</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link text-uppercase " to="/spnu" activeStyle={{
                                            fontWeight: "bold",
                                            color: "red"
                                        }}>ĐỒng hồ nữ</NavLink></li>
                                    <li className="nav-item">
                                        <NavLink to="/dhdoi" className="nav-link text-uppercase " activeStyle={{
                                            fontWeight: "bold",
                                            color: "red"
                                        }}>Đồng hồ đôi</NavLink></li>
                                
                                    <li className="nav-item">
                                        <NavLink to="/phukien" className="nav-link text-uppercase " activeStyle={{
                                            fontWeight: "bold",
                                            color: "red"
                                        }}>Phụ kiện</NavLink></li>

                                    <li>
                                        <NavLink className="nav-link text-uppercase " to="/News">Tin tức</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-uppercase ">Về CDN watch</a></li>


                                </ul>


                            </div>
                                                
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

export default Headerfn;