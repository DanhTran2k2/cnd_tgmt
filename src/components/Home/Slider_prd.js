import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

class Slider_prd extends Component {
    render() {
        return (
            <div id="mycarousel" className="carousel slide" data-ride="carousel">
                {/*Cho hiện thị chỉ số nếu muốn*/}
                {/* <ol className="carousel-indicators">
                    <li data-target="#mycarousel" data-slide-to={0} className="active" />
                    <li data-target="#mycarousel" data-slide-to={1} className />
                    <li data-target="#mycarousel" data-slide-to={2} className />
                </ol> */}
                {/*Hết tạo chỉ số*/}
                {/*Các slide bên trong carousel-inner*/}
                <div className="carousel-inner">
                    {/*Slide 1 thiết lập hiện thị đầu tiên .active*/}
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://www.dangquangwatch.vn/upload/slideshow/346623209_dang_quang_watch_2021.jpg" />    
                    </div>
                    {/*Slide 2*/}
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://www.dangquangwatch.vn/upload/slideshow/2072653358_dong-ho-citizen-sale20.jpg" />
                    </div>
                    {/*Slide 3*/}
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://www.dangquangwatch.vn/upload/slideshow/2113663755_dang_quang_watch_cuoi_2021.jpg" />
                    </div>
                </div>
                {/*Cho thêm khiển chuyển slide trước, sau nếu muốn*/}
                <a className="carousel-control-prev" href="#mycarousel" role="button" data-slide="prev"> <span className="carousel-control-prev-icon" aria-hidden="true" /> <span className="sr-only">Previous</span></a>
                <a className="carousel-control-next" href="#mycarousel" role="button" data-slide="next"> <span className="carousel-control-next-icon" aria-hidden="true" /> <span className="sr-only">Next</span> </a>
                {/*Hết tạo điều khiển chuyển Slide*/}
            </div>

        );
    }
}

export default Slider_prd;