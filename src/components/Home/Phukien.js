import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Phukien extends Component {
    render() {
        return (
            <div>
                <div className="recoment-nb">
                    <div className="row d-flex equal">
                        <div className="  col-md-2 mb-4">
                            <div className="card h-100 border-0" style={{ width: '12rem' }}>
                            <span className="tagsale">SALE</span>
                                <div className="card-img-top">
                                    <img src="https://www.dangquangwatch.vn/upload/product/1905887238_D%20DM%20W%2012.jpg" className="img-fluid mx-auto d-block" alt="Card image cap" />
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title">
                                        <a href="#" className=" font-weight-bold text-dark text-uppercase small">Dây da Diamond D D DM W 12</a>
                                    </h5>
                                    <h5 className="card-price small text-warning">
                                        <i>
                                            <s>$599</s> $299</i>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className=" col-md-2 mb-4">
                            <div className="card h-100 border-0" style={{ width: '12rem' }}>
                            <span className="tagsale">SALE</span>
                                <div className="card-img-top">
                                    <img src="https://www.dangquangwatch.vn/upload/product/671677166_ddweb5.jpg" className="img-fluid mx-auto d-block" alt="Card image cap" />
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title">
                                        <a href="#" className=" font-weight-bold text-dark text-uppercase small"> Dây da Đăng Quang D-A-2301PKS.4P.BR-18</a>
                                    </h5>
                                    <h5 className="card-price small text-warning">
                                        <i>
                                            <s>$599</s> $299</i>
                                    </h5>
                                </div>

                            </div>
                        </div>
                        <div className=" col-md-2 mb-4">
                            <div className="card h-100 border-0" style={{ width: '12rem' }}>
                            <span className="tagsale">SALE</span>
                                <div className="card-img-top">
                                    <img src="https://www.dangquangwatch.vn/upload/product/1133578377_D-PANF-443-2022.jpg" className="img-fluid mx-auto d-block" alt="Card image cap" />
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title">
                                        <a href="#" className=" font-weight-bold text-dark text-uppercase small"> Dây da Đăng Quang D-PANF-443-20/22</a>
                                    </h5>
                                    <h5 className="card-price small text-warning">
                                        <i>
                                            <s>$599</s> $299</i>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className=" col-md-2 mb-4">
                            <div className="card h-100 border-0" style={{ width: '12rem' }}>
                            <span className="tagsale">SALE</span>
                                <div className="card-img-top">
                                    <img src="https://www.dangquangwatch.vn/upload/product/486839284_1410131607_DDWEB7.jpg" className="img-fluid mx-auto d-block" alt="Card image cap" />
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title">
                                        <a href="#" className=" font-weight-bold text-dark text-uppercase small">Dây da Đăng Quang D-71Y-190-02/22</a>
                                    </h5>
                                    <h5 className="card-price small text-warning">
                                        <i>
                                            <s>$599</s> $299</i>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className=" col-md-2 mb-4">
                            <div className="card h-100 border-0" style={{ width: '12rem' }}>
                            <span className="tagsale">SALE</span>
                                <div className="card-img-top">
                                    <img src="https://www.dangquangwatch.vn/upload/product/1566923361_1268034163_D-01A-409-01-24.jpg" className="img-fluid mx-auto d-block" alt="Card image cap" />
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title">
                                        <a href="#" className=" font-weight-bold text-dark text-uppercase small"> Dây da Đăng Quang D-01A-409-01/24</a>
                                    </h5>
                                    <h5 className="card-price small text-warning">
                                        <i>
                                            <s>$599</s> $299</i>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className=" col-md-2 mb-4">
                            <div className="card h-100 border-0" style={{ width: '12rem' }}>
                            <span className="tagsale">SALE</span>
                                <div className="card-img-top">
                                    <img src="https://www.dangquangwatch.vn/upload/product/855811392_DAY%20DA%20CHINH%20HANG%203.jpg" className="img-fluid mx-auto d-block" alt="Card image cap" />
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title">
                                        <a href="#" className=" font-weight-bold text-dark text-uppercase small"> Đồng hồ Diamond D DM61195IG-B</a>
                                    </h5>
                                    <h5 className="card-price small text-warning">
                                        <i>
                                            <s>$599</s> $299</i>
                                    </h5>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="viewsp">
                    <Link to="/phukien"><h5>XEM TẤT CẢ SẢN PHẨM<li className="fa fa-angle-double-right"></li></h5></Link>
                </div>
            </div>
        );
    }
}

export default Phukien;