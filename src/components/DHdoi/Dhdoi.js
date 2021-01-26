import React, { Component } from 'react';
import casio from "../Spnu/hang/casio.jpg";
import ben from "../Spnu/hang/bentley.jpg";
import og from "../Spnu/hang/ogya.jpg";
import olym from "../Spnu/hang/olym.jpg";
import seiko from "../Spnu/hang/seiko.jpg";
import orient from "../Spnu/hang/orient.jpg";
import olympya from "../Spnu/hang/olympya.jpg";
import { Datadoi } from "../data/Dhdoi";
import { Link } from "react-router-dom";
import Item from './Item';
import Services from '../Services/Services';
import New from '../New/New';
class Dhdoi extends Component {
    to_slug = (str) => {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();

        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');

        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');

        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');

        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');

        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');

        // return
        return str;
    }
    render() {
        return (
            <div>
                <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/home">Trang chủ</Link></li>
              <li className="breadcrumb-item"><Link to="/dongho">Đồng hồ</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Đồng hồ đôi</li>
            </ol>
          </nav>
        </div>
                <div className="container">
                    <br />
                    <div>
                    <Link className="icon_hang" to="/casio"><img src={casio} alt="..." className="img-thumbnail" width={80} height={70} /></Link>
                        <a className="icon_hang" href="#"><img src={ben} alt="..." className="img-thumbnail" width={80} height={70} /></a>
                        <a className="icon_hang" href="#"><img src={og} alt="..." className="img-thumbnail" width={80} height={70} /></a>
                        <a className="icon_hang" href="#"><img src={olym} alt="..." className="img-thumbnail" width={80} height={70} /></a>
                        <a className="icon_hang" href="#"><img src={seiko} alt="..." className="img-thumbnail" width={80} height={70} /></a>
                        <a className="icon_hang" href="#"><img src={orient} alt="..." className="img-thumbnail" width={80} height={70} /></a>
                        <a className="icon_hang" href="#"><img src={olympya} alt="..." className="img-thumbnail" width={80} height={70} /></a>
                    </div>
                    <br />
                </div>
                <div className="container">
                    <br />
                    <p className="dhn">  Đồng hồ đôi</p>
                    <hr />
                    <div className="row">
                        <div class="btn-group">
                            <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Giá
                 </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Dưới 1 triệu</a>
                                <a class="dropdown-item" href="#">1 - 2 triệu</a>
                                <a class="dropdown-item" href="#">2 - 3 triệu</a>
                                <a class="dropdown-item" href="#">3 - 5 triệu</a>
                                <a class="dropdown-item" href="#">5 - 10 triệu</a>
                            </div>
                        </div>

                        <div class="btn-group">
                            <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Kiểu đồng hồ
                 </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Automatic(Tự động)</a>
                                <a class="dropdown-item" href="#">Quartz (PIN)</a>
                                <a class="dropdown-item" href="#">Digital</a>

                            </div>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Chất liệu kính
                 </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#"> Kính sapphire</a>
                                <a class="dropdown-item" href="#"> Kính Hardlex</a>
                                <a class="dropdown-item" href="#">Kính cứng khoáng</a>

                            </div>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Chất liệu dây
                 </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#"> Dây da</a>
                                <a class="dropdown-item" href="#">Dây vải</a>
                                <a class="dropdown-item" href="#"> Dây thép</a>
                                <a class="dropdown-item" href="#">Dây cao su</a>

                            </div>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Màu mặt
                 </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#"> Đen </a>
                                <a class="dropdown-item" href="#">Vàng </a>
                                <a class="dropdown-item" href="#">Đỏ</a>
                                <a class="dropdown-item" href="#">Trắng</a>
                                <a class="dropdown-item" href="#">Xanh quân đội</a>
                                <a class="dropdown-item" href="#">Xanh Navy</a>
                            </div>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Thương hiệu
                 </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#"> BENTLEY</a>
                                <a class="dropdown-item" href="#">CASIO</a>
                                <a class="dropdown-item" href="#">Megir</a>
                                <a class="dropdown-item" href="#">OGIVAL</a>
                                <a class="dropdown-item" href="#">ORIENT</a>
                                <a class="dropdown-item" href="#"> RUIMAS</a>
                            </div>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn  dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Sắp xếp
             </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#"> Sản phẩm nổi bật</a>
                                <a class="dropdown-item" href="#">Giá cao xuống thấp</a>
                                <a class="dropdown-item" href="#">Thấp đến cao</a>

                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        {Datadoi.map((val, key) => {
                            var spid = val.id
                            return (
                                <Link to={"chi-tiet-dhdoi/" + spid + "/" + this.to_slug(val.name) + ".html"}>

                                    <Item image={val.image} price={val.price} key={key}>{val.name}</Item>
                                </Link>)
                        })}

                    </div>
                    <div className="row">
                        <nav aria-label="...">
                            <ul className="pagination">
                                <li className="page-item disabled">
                                    <a className="page-link" href="#" tabIndex={-1}>Previous</a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item active">
                                    <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <br/>
                <Services/>
                <New/>
            </div>
        );
    }
}

export default Dhdoi;