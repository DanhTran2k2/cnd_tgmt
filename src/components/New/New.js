import React, { Component } from 'react';
import "./News.css";
import { Link } from "react-router-dom";
class New extends Component {
    render() {
        return (
            <div className="new">
                <div className="news">
                    <div className="row">
                        <div className="col-12 pb-5">
                            {/*SECTION START*/}
                            <section className="row">
                                {/*Start slider news*/}
                                <div className="col-12 col-md-6 pb-0 pb-md-3 pt-2 pr-md-1">
                                    <h4 className="video">VIDEO</h4>
                                    <iframe width={560} height={315} src="https://www.youtube.com/embed/ETwTZbqgrL4" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                                    <div className="xemthem">
                                        <a href="https://www.youtube.com/watch?v=Yy1OtSgm-u4&ab_channel=%C4%90%C3%B4ngH%C3%B9ngOfficial">Xem kênh: CDN Shop</a>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 pt-2 pl-md-1 mb-3 mb-lg-4">
                                <h4 className="video">TIN TỨC - SỰ KIỆN</h4>
                                    <div className="row">
                                        {/*news box*/}
                                        <div className="col-6 pb-1 pt-0 pr-1">
                                            <div className="card border-0 rounded-0 text-white overflow zoom">
                                                <div className="position-relative">
                                                    {/*thumbnail img*/}
                                                    <div className="ratio_right-cover-2 image-wrapper">
                                                        <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                                            <img className="img-fluid" src="https://www.dangquangwatch.vn/upload/article/153054713_doi-nu-cuoi-lay-iphone-12.jpg" alt="simple blog template bootstrap" />
                                                        </a>
                                                    </div>
                                                    <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                                        <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                                            <h5 className="h5 text-white my-1">DQW Đổi nụ cười lấy Iphone 12 – Bạn có muốn thử?</h5>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*news box*/}
                                        <div className="col-6 pb-1 pl-1 pt-0">
                                            <div className="card border-0 rounded-0 text-white overflow zoom">
                                                <div className="position-relative">
                                                    {/*thumbnail img*/}
                                                    <div className="ratio_right-cover-2 image-wrapper">
                                                        <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                                            <img className="img-fluid" src="https://www.dangquangwatch.vn/upload/article/1564662706_black-friday-sale-30.jpg" alt="bootstrap templates for blog" />
                                                        </a>
                                                    </div>
                                                    <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">

                                                        <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                                            <h5 className="h5 text-white my-1">Sale sập sàn Black Friday – Giảm ngay 30% đồng hồ chính hãng tại Đăng Quang Watch</h5>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*news box*/}
                                        <div className="col-6 pb-1 pr-1 pt-1">
                                            <div className="card border-0 rounded-0 text-white overflow zoom">
                                                <div className="position-relative">
                                                    {/*thumbnail img*/}
                                                    <div className="ratio_right-cover-2 image-wrapper">
                                                        <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                                            <img className="img-fluid" src="https://www.dangquangwatch.vn/upload/article/626473748_but-ky-mon-qua-20-11.jpg" alt="bootstrap blog wordpress theme" />
                                                        </a>
                                                    </div>
                                                    <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">

                                                        <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                                            <h5 className="h5 text-white my-1">Chọn quà tặng thầy cô nhân ngày 20/11 - nhất định không thể bỏ qua gợi ý này</h5>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*news box*/}
                                        <div className="col-6 pb-1 pl-1 pt-1">
                                            <div className="card border-0 rounded-0 text-white overflow zoom">
                                                <div className="position-relative">
                                                    {/*thumbnail img*/}
                                                    <div className="ratio_right-cover-2 image-wrapper">
                                                        <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                                            <img className="img-fluid" src="https://www.dangquangwatch.vn/upload/article/915277470_dong_ho_citizen_chinh_hang.jpg" alt="blog website templates bootstrap" />
                                                        </a>
                                                    </div>
                                                    <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">

                                                        <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                                            <h5 className="h5 text-white my-1">BST đồng hồ Citizen C7 chính thức có mặt tại Việt Nam</h5>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*end news box*/}
                                    </div>
                                    <div className="xemthem">
                                        <Link to="/News">Xem tất cả</Link>
                                    </div>
                                </div>
                                {/*End box news*/}
                            </section>
                            {/*END SECTION*/}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default New;