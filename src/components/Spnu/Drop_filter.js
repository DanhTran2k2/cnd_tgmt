import React, { Component } from 'react';


class Filter extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div>
            <img src="..." alt="..." className="img-thumbnail" />
            <img src="..." alt="..." className="img-thumbnail" />
            <img src="..." alt="..." className="img-thumbnail" />
            <img src="..." alt="..." className="img-thumbnail" />
          </div>
        </div>
        <div className="container">
          <h4>Đồng hồ chính hãng</h4>
          <div className="row">
            <div class="btn-group">
              <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
              <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Kiểu đồng hồ
             </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Automatic(Tự động)</a>
                <a class="dropdown-item" href="#">Quartz (PIN)</a>
                <a class="dropdown-item" href="#">Digital</a>

              </div>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Chất liệu kính
             </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#"> Kính sapphire</a>
                <a class="dropdown-item" href="#"> Kính Hardlex</a>
                <a class="dropdown-item" href="#">Kính cứng khoáng</a>

              </div>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
              <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
              <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;