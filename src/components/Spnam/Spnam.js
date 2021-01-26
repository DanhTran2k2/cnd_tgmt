import React, { Component } from 'react';
import Itemnam from './Itemnam';
import './Product.css';
import index1 from './index1.jpg';
import { Link } from "react-router-dom";
// import Data from "../data/data.json";
import { Data } from "../data/Data";
import Item from '../Home/Item';
import Select from './Select';
import casio from "../Spnam/hang/casio.jpg";
import ben from "../Spnam/hang/bentley.jpg";
import og from "../Spnam/hang/ogya.jpg";
import olym from "../Spnam/hang/olym.jpg";
import seiko from "../Spnam/hang/seiko.jpg";
import orient from "../Spnam/hang/orient.jpg";
import olympya from "../Spnam/hang/olympya.jpg";
import Services from "../Services/Services";
import New from '../New/New';
class Spnam extends Component {
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
              <li className="breadcrumb-item active" aria-current="page">Đồng hồ nam</li>
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
          <p className="dhn"> Đồng hồ nam chính hãng</p>
          <hr />
          <div className="row">
            <div class="btn-group">
              <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Giá
             </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Dưới 1 triệu</a>
                <a className="dropdown-item" href="#">1 - 2 triệu</a>
                <a className="dropdown-item" href="#">2 - 3 triệu</a>
                <a className="dropdown-item" href="#">3 - 5 triệu</a>
                <a className="dropdown-item" href="#">5 - 10 triệu</a>
              </div>
            </div>

            <div className="btn-group">
              <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Kiểu đồng hồ
             </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Automatic(Tự động)</a>
                <a className="dropdown-item" href="#">Quartz (PIN)</a>
                <a className="dropdown-item" href="#">Digital</a>

              </div>
            </div>
            <div className="btn-group">
              <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Chất liệu kính
             </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#"> Kính sapphire</a>
                <a className="dropdown-item" href="#"> Kính Hardlex</a>
                <a className="dropdown-item" href="#">Kính cứng khoáng</a>

              </div>
            </div>
            <div className="btn-group">
              <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Chất liệu dây
             </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#"> Dây da</a>
                <a className="dropdown-item" href="#">Dây vải</a>
                <a className="dropdown-item" href="#"> Dây thép</a>
                <a className="dropdown-item" href="#">Dây cao su</a>

              </div>
            </div>
            <div className="btn-group">
              <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Màu mặt
             </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#"> Đen </a>
                <a className="dropdown-item" href="#">Vàng </a>
                <a className="dropdown-item" href="#">Đỏ</a>
                <a className="dropdown-item" href="#">Trắng</a>
                <a className="dropdown-item" href="#">Xanh quân đội</a>
                <a className="dropdown-item" href="#">Xanh Navy</a>
              </div>
            </div>
            <div className="btn-group">
              <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Thương hiệu
             </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#"> BENTLEY</a>
                <a className="dropdown-item" href="#">CASIO</a>
                <a className="dropdown-item" href="#">Megir</a>
                <a className="dropdown-item" href="#">OGIVAL</a>
                <a className="dropdown-item" href="#">ORIENT</a>
                <a className="dropdown-item" href="#"> RUIMAS</a>
              </div>
            </div>
            <div className="btn-group">
              <button type="button" className="btn  dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sắp xếp
             </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#"> Sản phẩm nổi bật</a>
                <a className="dropdown-item" href="#">Giá cao xuống thấp</a>
                <a className="dropdown-item" href="#">Thấp đến cao</a>

              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            {Data.map((val, key) => {
              var pid = val.id
              return (
                <Link to={"chi-tiet-nam/" + pid + "/" + this.to_slug(val.name) + ".html"}>
                  <Itemnam image={val.image} price={val.price} key={key}>{val.name}</Itemnam>
                </Link>)
            })}

          </div>
          <div className="col-12">
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
        <Services />
        <New />
      </div>


    );
  }
}

export default Spnam;