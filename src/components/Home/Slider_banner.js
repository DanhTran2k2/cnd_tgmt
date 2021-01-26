import React, { Component } from 'react';
import './SLider.css';
import left from './arrow_left.png';
import right from './arrow_right.png';
import { Link } from "react-router-dom";
class Slider_banner extends Component {
    render() {
        return (
            <div className="backg">
                <div className="cont">
                    <br />
                    <div className="row">
                        <div className="col-sm-3" >
                            <div className="sale-text">
                                <Link to="/spnam"><h5>FLASH SALE</h5></Link>
                                <p className="flash">Những mẫu đồng hồ đang hot năm 2020 với giá tốt.
                            Chương trình diễn ra hàng ngày với các sản phẩm khác nhau. Nhanh tay sở hữu ngay!!!</p></div>
                        </div>
                        <div className="col-sm-9" >
                            <div className="recoment">
                                <div className="row d-flex equal">
                                    <div className="  col-md-3 mb-4">
                                        <div className="card h-100 border-0">
                                            <div className="card-img-top">
                                                <img src="https://www.dangquangwatch.vn/upload/product/676187452_QQ-S279J102Y.jpg" className="img-fluid mx-auto d-block" alt="Card image cap" />
                                            </div> <span className="tagsale">SALE</span>
                                            <div className="card-body text-center">
                                                <h5 className="card-title">
                                                    <a href="#" className=" font-weight-bold text-dark text-uppercase small"> Đồng hồ Jacques Lemans JL-42-5F</a>
                                                </h5>
                                                <h5 className="card-price small text-warning">
                                                    <i>
                                                        <s>$599</s> $299</i>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" col-md-3 mb-4">
                                        <div className="card h-100 border-0">
                                            <div className="card-img-top">
                                                <img src="https://www.dangquangwatch.vn/upload/product/643523283_%C4%91%C3%B2ng-h%E1%BB%93-ch%C3%ADnh-h%C3%A3ng-27.jpg" className="img-fluid mx-auto d-block" alt="Card image cap" />
                                            </div> <span className="tagsale">SALE</span>
                                            <div className="card-body text-center">
                                                <h5 className="card-title">
                                                    <a href="#" className=" font-weight-bold text-dark text-uppercase small"> Đồng hồ Jacques Lemans JL-42-5F</a>
                                                </h5>
                                                <h5 className="card-price small text-warning">
                                                    <i>
                                                        <s>$599</s> $299</i>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" col-md-3 mb-4">
                                        <div className="card h-100 border-0">
                                            <div className="card-img-top">
                                                <img src="https://www.dangquangwatch.vn/upload/QQ/QZ00J301Y.jpg" className="img-fluid mx-auto d-block" alt="Card image cap" />
                                            </div> <span className="tagsale">SALE</span>
                                            <div className="card-body text-center">
                                                <h5 className="card-title">
                                                    <a href="#" className=" font-weight-bold text-dark text-uppercase small"> Đồng hồ Jacques Lemans JL-42-5F</a>
                                                </h5>
                                                <h5 className="card-price small text-warning">
                                                    <i>
                                                        <s>$599</s> $299</i>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" col-md-3 mb-4">
                                        <div className="card h-100 border-0">
                                            <div className="card-img-top">
                                                <img src="https://www.dangquangwatch.vn/upload/product/1602688128_%C4%91%C3%B2ng-h%E1%BB%93-ch%C3%ADnh-h%C3%A3ng-25.jpg" className="img-fluid mx-auto d-block" alt="Card image cap" />
                                            </div> <span className="tagsale">SALE</span>
                                            <div className="card-body text-center">
                                                <h5 className="card-title">
                                                    <a href="#" className=" font-weight-bold text-dark text-uppercase small"> Đồng hồ Jacques Lemans JL-42-5F</a>
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
                        

                        </div>
                    </div>

                </div>
            </div>

        );
    }
}

export default Slider_banner;