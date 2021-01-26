import React, { Component } from 'react';
import sup1 from './sup1.png';
import sup2 from './sup2.png';
import sup3 from './sup3.png';
import sup4 from './sup4.png';
import './Service.css';
class Services extends Component {
    render() {
        return (
            <div className ="service">
            <div className="group">
                <div className="item">
                    <div className="flex">
                        <div className="img">
                            <img src={sup1} alt="Ship" className="lazy"  />
                        </div>
                        <div className="text">
                            <p className="ttu fRobotoB">GIAO HÀNG MIỄN PHÍ</p>
                            <p>Thanh toán (COD) tại nhà</p>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="flex">
                        <div className="img">
                            <img src={sup2} alt="Doi san pham" className="lazy"  />
                        </div>
                        <div className="text">
                            <p className="ttu fRobotoB">30 NGÀY ĐỔI SẢN PHẨM</p>
                            <p>Miễn phí</p>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="flex">
                        <div className="img">
                            <img src={sup3} alt="Bao hanh" className="lazy"  />
                        </div>
                        <div className="text">
                            <p className="ttu fRobotoB">BẢO HÀNH QUỐC TẾ</p>
                            <p>Thay pin miễn phí</p>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="flex">
                        <div className="img">
                            <img src={sup4} alt="Hoa don do" className="lazy" />
                        </div>
                        <div className="text">
                            <p className="ttu fRobotoB">CHÍNH HÃNG 100%</p>
                            <p>Xuất hóa đơn đỏ</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Services;