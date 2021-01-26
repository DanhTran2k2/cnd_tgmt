import React, { Component } from 'react';
import './Detail.css';
import { useParams } from "react-router-dom";
import { Data } from "../data/Data";
import a from './a.jpg';
import b from './b.jpg';
import c from './c.jpg';
import { Link } from "react-router-dom";
import Info from './Info';
import Services from "../Services/Services";
import New from "../New/New";
import Detail_ts from "../Detail_ts/Detail_ts";

function Detail() {

    var { pid } = (useParams());
    var prid = parseInt(pid);
    let { slug } = useParams();

    return (
        <div>
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/home">Trang chủ</Link></li>
                        <li className="breadcrumb-item"><Link to="/dongho">Đồng hồ</Link></li>
                        <li className="breadcrumb-item"><Link to="/spnam">Đồng hồ nam</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Chi tiết</li>
                    </ol>
                </nav>
            </div>
            <div className="container"><br />
                <div className="row">
                    {/* <div className="col-md-6 col-sm-6 mb-4">
                        <div className="pro-img-details">
                            {Data.map((val, key) => {
                                if (val.id === prid) {
                                    return (
                                        <img key={key} src={val.image}  ></img>
                                    )
                                }
                            })
                            }
                        </div>
                        <div className="pro-img-list">
                            <a href="#">
                                <img src="https://via.placeholder.com/115x100/87CEFA/000000" alt="" />
                            </a>
                            <a href="#">
                                <img src="https://via.placeholder.com/115x100/FF7F50/000000" alt="" />
                            </a>
                            <a href="#">
                                <img src="https://via.placeholder.com/115x100/20B2AA/000000" alt="" />
                            </a>
                            <a href="#">
                                <img src="https://via.placeholder.com/115x100/20B2AA/000000" alt="" />
                            </a>

                        </div>
                    </div> */}
                    <div className="col-md-6 col-sm-6">
                        <div className="d-flex">
                            <div className="card-prview">
                                <span className="tagsale">SALE</span>
                                <div className="d-flex flex-column thumbnails">

                                    <div id="f1" className="tb tb-active">
                                        {Data.map((val, key) => {
                                            if (val.id === prid) {
                                                return (
                                                    <img className="thumbnail-img fit-image" key={key} src={val.image}  ></img>
                                                )
                                            }
                                        })
                                        }
                                    </div>
                                    <div id="f2" className="tb"> <img className="thumbnail-img fit-image" src={a} /> </div>
                                    <div id="f3" className="tb"> <img className="thumbnail-img fit-image" src={b} /> </div>
                                    <div id="f4" className="tb"> <img className="thumbnail-img fit-image" src={c} /> </div>
                                </div>
                                <fieldset id="f11" className="active">
                                    <div className="product-pic">
                                        <span className="tagsale">SALE</span>
                                        {Data.map((val, key) => {
                                            if (val.id === prid) {
                                                return (
                                                    <img className="pic0" key={key} src={val.image}  ></img>
                                                )
                                            }
                                        })
                                        }
                                    </div>
                                </fieldset>
                                <fieldset id="f21" className>
                                    <div className="product-pic"> <img className="pic0" src={a} /> </div>
                                </fieldset>
                                <fieldset id="f31" className>
                                    <div className="product-pic"> <img className="pic0" src={b} /> </div>
                                </fieldset>
                                <fieldset id="f41" className>
                                    <div className="product-pic"> <img className="pic0" src={c} /> </div>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 mb-4">

                        <h4 style={{ fontFamily: 'verdana' }} className="my-3">{slug}</h4>

                        <hr />

                        <div className="p-3 mb-2 bg-light text-dark">
                            <div className="price_detail">
                                <div className="row">
                                    <div className="col">
                                        Giá niêm yết
                                    <div className="gianiemyet">
                                            {Data.map((val, key) => {
                                                if (val.id === prid) {
                                                    return (
                                                        <h4 key={key}>{val.price}</h4>
                                                    )
                                                }
                                            })
                                            }
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="sale" style={{ width: '74px', height: '86px' }}>
                                            SALE
                                        <div className="giakm" >
                                                10%
                                        </div>
                                        </div>

                                    </div>
                                    <div className="col">
                                        Giá khuyến mãi
                                   <div className="giakm">
                                            {Data.map((val, key) => {
                                                if (val.id === prid) {
                                                    return (
                                                        <h4 key={key}>{val.price}</h4>
                                                    )
                                                }
                                            })
                                            }
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="p-3 mb-2 bg-light text-dark">
                            <div className="cauhinh">
                                <div className="row">
                                    <div className="col">
                                        <div className="itemm">
                                            <div>Kiểu đồng hồ</div>
                                            <div className="textB">Quartz (PIN)</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="itemm">
                                            <div>Chất liệu kính</div>
                                            <div className="textB" >Kính sapphire</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="itemm">
                                            <div>Chất liệu dây</div>
                                            <div className="textB">Dây thép</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="itemm">
                                            <div>Độ chịu nước</div>
                                            <div className="textB">10 ATM</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p style={{ color: 'red' }}>Hãy bấm nút MUA NGAY và đặt hàng
                        (nhận hàng kiểm tra mới thanh toán - COD).
                    </p>

                        <div>
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star" />
                        </div>
                        <p>1000 nhận xét</p><hr />
                        <div className="quantity">

                            <input type="number" step={1} max={99} min={1} defaultValue={1} title="Qty" className="qty" size={4} />
                        </div>
                        <div className="row">
                            <div className="col-sm">
                                <Link to="/checkout"><button type="button" class="btn btn-primary" href="">Thêm giỏ hàng</button></Link>
                            </div>
                        </div>
                        <hr />
                        <div className="hotline">
                            <span>Gọi đặt mua: </span>
                            <a href="tel:18006005" title={18006005}><span className="icon"><i className="fas fa-phone" /></span> 1800.6005</a>
                            <span>(8:30 - 21:30)</span>
                        </div>
                        <div className="col-sm">
                            <Link to="/checkout"> <button type="button" class="btn btn-warning btn-block">MUA NGAY</button></Link>
                        </div>
                        <hr />
                        <div className="col-sm">
                            <div className="social">
                                <div>
                                    <a href="#" class="fa fa-facebook"></a>
                                    <a href="#" class="fa fa-twitter"></a>


                                    <a href="#" class="fa fa-youtube"></a>
                                    <a href="#" class="fa fa-instagram"></a>

                                    <a href="#" class="fa fa-skype"></a>

                                </div>

                            </div>
                        </div>


                    </div>
                </div>
                <Detail_ts />

                <div className="row">
                    <div className="col-12">

                    </div>
                </div>

            </div>
            <Services />
            <New />

        </div>
    );
}


export default Detail;