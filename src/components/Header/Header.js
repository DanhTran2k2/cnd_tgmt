import React, { Component } from 'react';
import './Header.css';
import cart from './cart.png';
import { NavLink, Link } from "react-router-dom";
import Slider_prd from '../Home/Slider_prd';

class Header extends Component {
    render() {
        return (
            <div>
            <header className="header">
                <nav className="navbar navbar-expand-lg danger-color-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand nav-link text-uppercase" href="#">Navbar</a>
                        <div id="navbarSupportedContent" className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li>
                                <NavLink className="nav-link text-uppercase " to="/home" activeStyle={{
                                        fontWeight: "bold",
                                        color: "blue"
                                    }}>Home</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link  dropdown-toggle nav-link text-uppercase" to="dongho" data-toggle="dropdown"> Thương hiệu  </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link to="casio" className="dropdown-item" href="#"> CASIO</Link></li>
                                        <li><a className="dropdown-item" href="#"> BENTLEY </a></li>
                                        <li><a className="dropdown-item" href="#"> CASIO </a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-uppercase " to="/spnam" activeStyle={{
                                        fontWeight: "bold",
                                        color: "blue"
                                    }}>ĐỒng hồ nam</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link text-uppercase " to="/spnu" activeStyle={{
                                        fontWeight: "bold",
                                        color: "blue"
                                    }}>ĐỒng hồ nữ</NavLink></li>
                                <li className="nav-item">
                                    <NavLink to="/dhdoi" className="nav-link text-uppercase " activeStyle={{
                                        fontWeight: "bold",
                                        color: "blue"
                                    }}>Đồng hồ đôi</NavLink></li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-uppercase ">Sữa chữa</a></li>
                                <li className="nav-item">
                                <NavLink to="/phukien" className="nav-link text-uppercase " activeStyle={{
                                        fontWeight: "bold",
                                        color: "blue"
                                    }}>Phụ kiện</NavLink></li>

                                <li>
                                    <NavLink className="nav-link text-uppercase " to="/News">Tin tức</NavLink>
                                </li>


                            </ul>

                        </div>
                        <div>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                        <Link to="/cart"><img className="img-roundedCircle" src={cart} alt="" width="35" height="35" /></Link>
                        

                    </div>
                </nav>
            </header>
           
            </div>
        );
    }
}

export default Header;