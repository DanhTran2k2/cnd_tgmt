import React, { Component } from 'react';
import nam from './nam.jpg';
import nu from './nu.jpg';
import './Namnu.css';
class Namnu extends Component {
    render() {
        return (
            <div className="mt-4">
                <div>
                    <h2>MUA ĐỒNG HỒ ONLINE ĐƠN GIẢN</h2>
                    <h6>Ngồi tại nhà và đặt mua đồng hồ chính hãng với sự an tâm cao nhất. Đây là cách mà 6,000+ 
                        khách hàng đã chọn.Còn Quý khách thì sao?</h6>
                </div>
                <div className="d-flex justify-content-around">
                    <div className="content"> 
                        <a href="#">
                            <div className="content-overlay" /> <img className="content-image" src={ nam } />
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Sản phẩm nam</h3>
                                <p className="content-text"><i className="fa fa-map-marker" /> Chi tiết</p>
                            </div>
                        </a> 
                    </div>
                    <div className="content"> 
                        <a href="#">
                            <div className="content-overlay" /> <img className="content-image" src={ nu } />
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Sản phẩm nữ</h3>
                                <p className="content-text"><i className="fa fa-map-marker" /> Chi tiết </p>
                            </div>
                        </a> 
                    </div>
                    <div className="content"> 
                        <a href="#">
                            <div className="content-overlay" /> <img className="content-image" src={ nu } />
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Sản phẩm nữ</h3>
                                <p className="content-text"><i className="fa fa-map-marker" /> Chi tiết </p>
                            </div>
                        </a> 
                    </div>
                    <div className="content"> 
                        <a href="#">
                            <div className="content-overlay" /> <img className="content-image" src={ nu } />
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Sản phẩm nữ</h3>
                                <p className="content-text"><i className="fa fa-map-marker" /> Chi tiết </p>
                            </div>
                        </a> 
                    </div>
                </div>
               

            </div>
        );
    }
}

export default Namnu;