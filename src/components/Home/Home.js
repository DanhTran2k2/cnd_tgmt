import React, { Component } from 'react';
import casio from './casio.jpg';
import bentley from './bentley.jpg';
import ogya from './ogya.jpg';
import seiko from './seiko.jpg';
import s from './s.jpg';
import olym from './olym.jpg';
import olympya from './olympya.jpg';
import nam from './index1.jpg';
import dhnam from './dhnam.jpg';
import nu from './dhnu.jpg';
import dhdoi from './dong-ho-doi.jpg';
import Item from './Item';
import { Link } from "react-router-dom";
import Slider_prd from './Slider_prd';
import Slider_banner from './Slider_banner';
import Spnb from './Spnbnam';
import Test from './Test';
import Recoment from '../Recoment/Recoment';
import './home.css';
import SPNB_all from './SPNB_all';

import Services from '../Services/Services';
import Subinfo from '../Subinfo/Subinfo';
import New from '../New/New';
class Home extends Component {
    render() {
        return (
            <div>
               <Slider_prd/>
                <div className="back">
                    <div className="spnn">
                        <div className="mt-4 mb-3">
                            <div className="row">
                                <div className="col-4">
                                    <div className="content">
                                        <Link to="/spnam">
                                            <div className="content-overlay" /> <img className="content-image" src={dhnam} width={400} />
                                            <div className="content-details fadeIn-bottom">
                                                <h3 className="content-title" style={{ color: 'white' }}>Sản phẩm nam</h3>
                                             
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="content">
                                        <Link to="spnu">
                                            <div className="content-overlay" /> <img className="content-image" src={nu} width={400} />
                                            <div className="content-details fadeIn-bottom">
                                                <h3 className="content-title" style={{ color: 'white' }}>Sản phẩm nữ</h3>
                                              
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="content">
                                        <Link to="dhdoi">
                                            <div className="content-overlay" /> <img className="content-image" src={dhdoi} width={400} />
                                            <div className="content-details fadeIn-bottom">
                                                <h3 className="content-title" style={{ color: 'white' }}>Đồng hồ đôi</h3>
                                              
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <SPNB_all />
                    <div className="thieu">
                        <Link to="casio"><img src={casio} width="150" height="100"></img></Link>
                        <a href="#"><img src={bentley} width="150" height="100"></img></a>
                        <a href="#"><img src={ogya} width="150" height="100"></img></a>
                        <a href="#"><img src={seiko} width="150" height="100"></img></a>
                        <a href="#"><img src={s} width="150" height="100"></img></a>
                        <a href="#"><img src={olym} width="150" height="100"></img></a>
                        <a href="#"><img src={olympya} width="150" height="100"></img></a>
                    </div>
                    <hr />
                </div>
                <Slider_banner />
                <br />
                <Services />
                <div className="help">
                    <br />
                    <h3>HỖ TRỢ NGAY</h3>

                    <div className="row">
                        <div className="col-xl-6">
                            <h4>BẠN CẦN HỖ TRỢ NGAY LẬP TỨC?</h4>
                            <p>Vui lòng điền thông tin và nội dung cần hỗ trợ trong bảng bên cạnh. Chúng tôi sẽ phản hồi sớm nhất có thể.</p>
                            <p>Cảm ơn bạn.</p>
                            <br/>
                            <div className="contractt">
                                <div>
                                    <h4>Mạng xã hội</h4>
                                    <div className="">
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
                        <div className="col-xl-6">
                            <form id="contact-form" method="post" action="contact.php" role="form">
                                <div className="messages" />
                                <div className="controls">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input id="form_name" type="text" name="name" className="form-control" placeholder="Họ *" required="required" data-error="Firstname is required." />
                                                <div className="help-block with-errors" />
                                            </div>
                                            
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">

                                                <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Tên *" required="required" data-error="Lastname is required." />
                                                <div className="help-block with-errors" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">

                                                <input id="form_email" type="email" name="email" className="form-control" placeholder="Email *" required="required" data-error="Valid email is required." />
                                                <div className="help-block with-errors" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">

                                                <input id="form_email" type="email" name="email" className="form-control" placeholder="Số điện thoại *" required="required" data-error="Valid email is required." />
                                                <div className="help-block with-errors" />
                                            </div>
                                        </div>
                                    </div>



                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group ">

                                                <textarea id="form_message" name="message" className="form-control" placeholder="Hãy nhập tin nhắn *" rows={4} required="required" data-error="Please, leave us a message." defaultValue={""} />
                                                <div className="help-block with-errors" />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <input type="Gửi" className="btn btn-success btn-send" defaultValue="Gửi" />
                                        </div>
                                    </div>

                                </div>
                            </form>

                        </div>
                    </div>
                </div>
                <hr />
                <New />
            </div>


        );
    }
}

export default Home;