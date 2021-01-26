import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Link } from "react-router-dom";
import phonecall from "../image/phone-call.png";
import Services from "../Services/Services";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
class Lienhe extends Component {
    static defaultProps = {
        center: {
            lat: 15.979763,
            lng: 108.249498
        },
        zoom: 11
    };
    render() {
        return (
            <div>
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/home">Trang chủ</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Liên hệ</li>
                    </ol>
                </nav>
                <hr />
                <div className="row">
                    <div className="col-md-4">
                        <h4 className="video">Địa chỉ cửa hàng</h4>
                        <i className="fa fa-map-marker" aria-hidden="true" />
                        <span className="diachi-text">17 Khái Đông 3, phường Hòa Hải, quận Ngũ Hành Sơn, TP Đà Nẵng</span>
                        <p className="video">Mạng xã hội</p>
                        <div>
                            <a href="#" class="fa fa-facebook"></a>
                            <a href="#" class="fa fa-twitter"></a>


                            <a href="#" class="fa fa-youtube"></a>
                            <a href="#" class="fa fa-instagram"></a>

                            <a href="#" class="fa fa-skype"></a>

                        </div>
                      
                    </div>
                    <div className="col-md-8">
                        <div style={{ height: '90vh', width: '90%' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "AIzaSyD2tF34eWs7N6oBN9hU2oBqUztyqPGCqdg" }}
                                defaultCenter={this.props.center}
                                defaultZoom={this.props.zoom}
                            >
                                <AnyReactComponent
                                    lat={15.979763}
                                    lng={108.249498}
                                    text="CDN WATCH"
                                />
                            </GoogleMapReact>
                        </div>

                    </div>
                  
                </div>  </div> <br/><Services/>
            </div>
        );
    }
}

export default Lienhe;