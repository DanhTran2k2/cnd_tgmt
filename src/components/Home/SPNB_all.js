import React, { Component } from 'react';
import Phukien from './Phukien';
import Spnbnam from './Spnbnam';
import Spnbnu from './Spnbnu';
import './Testt.css';
class SPNB_all extends Component {
    render() {
        return (
            <div className="spnoibat">
                <h4 className="noibat">SẢN PHẨM NỔI BẬT</h4>
                <div className="spnb">
                    {/* Rounded tabs */}
                    <ul id="myTab" role="tablist" className="nav nav-tabs nav-pills flex-column flex-sm-row text-center bg-light  rounded-nav">
                        <li className="nav-item flex-sm-fill">
                            <a id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true" className="nav-link border-0 text-uppercase font-weight-bold active">ĐỒNG HỒ NAM</a>
                        </li>
                        <li className="nav-item flex-sm-fill">
                            <a id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false" className="nav-link border-0 text-uppercase font-weight-bold">ĐỒNG HỒ NỮ</a>
                        </li>
                        <li className="nav-item flex-sm-fill">
                            <a id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false" className="nav-link border-0 text-uppercase font-weight-bold">PHỤ KIỆN</a>
                        </li>
                    </ul>
                    <div id="myTabContent" className="tab-content">
                        <div id="home" role="tabpanel" aria-labelledby="home-tab" className="tab-pane  show active">
                          <Spnbnam/>
                        </div>
                        <div id="profile" role="tabpanel" aria-labelledby="profile-tab" className="tab-pane ">
                           <Spnbnu/>
                        </div>
                        <div id="contact" role="tabpanel" aria-labelledby="contact-tab" className="tab-pane ">
                          <Phukien/>
                        </div>
                    </div>
                    {/* End rounded tabs */}
                </div>


            </div>
        );
    }
}

export default SPNB_all;