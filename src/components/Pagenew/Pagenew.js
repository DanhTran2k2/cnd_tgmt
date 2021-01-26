import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Pagenew extends Component {
    render() {
        return (
            <div>
                <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/home">Trang chủ</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Tin tức</li>
                    </ol>
                </nav>
                </div>
                <div className="container">
                    <div className="row">
                        {/* Blog Entries Column */}
                        <div className="col-md-7">
                            <h4 className="my-4 video font-weight-bold">Tin tức - Sự kiện
                              </h4>
                            {/* Blog Post */}
                            <div className="card mb-4">
                                <img className="card-img-top" src="https://www.dangquangwatch.vn/lib/ckfinder/images/nu-cuoi-doi-iphone12-tab.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <a href="#"> <h4 className="card-title">DQW Đổi nụ cười lấy Iphone 12 – Bạn có muốn thử?</h4>
                                    <p className="card-text">Trong khi Iphone 12 chính hãng vẫn đang khiến các tín đồ “Mê Táo” chao đảo 
                                    săn lùng với mức giá khá cao, để mua hàng còn cần phải đặt trước, phải xếp hàng thì tại Đăng Quang Watch 
                                    sở hữu siêu phẩm Iphone đời mới nhất chưa bao giờ dễ dàng như thế với chương trình khuyến mại cực kì hấp 
                                    dẫn “Bạn cười may mắn sẽ ở bên bạn”</p></a>
                                   
            
                                </div>
                    
                            </div>
                            {/* Blog Post */}
                            <div className="card mb-4">
                                <img className="card-img-top" src="https://xwatch.vn/images/news/2020/09/22/original/dong-ho-limited-edition_1600765093.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <a href="#"> <h4 className="card-title">BST ĐỒNG HỒ THỤY SĨ LIMITED EDITION: ĐẲNG CẤP TAY CHƠI THỨ THIỆT!</h4>
                                    <p className="card-text">Từ xưa đến nay, đồng hồ Thụy Sĩ luôn là niềm ngưỡng vọng của các tay chơi đồng hồ thứ thiệt. 
                                    Đặc biệt, đồng hồ càng hiếm, càng giới hạn thì càng được săn lùng ráo riết. 
                                    Hãy cùng Xwatch điểm mặt TOP 4 mẫu đồng hồ limited edition được giới sành đồng hồ đặc biệt yêu thích ngay dưới đây nhé! </p></a>
                                   
            
                                </div>
                    
                            </div>
                            {/* Blog Post */}
                            <div className="card mb-4">
                                <img className="card-img-top" src="https://xwatch.vn/images/news/2020/09/15/original/dong-ho-tu-5-den-10-trieu_1600158962.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <a href="#"> <h4 className="card-title">ĐẸP MÊ HỒN 5 MẪU ĐỒNG HỒ NAM GIÁ TỪ 5 ĐẾN 10 TRIỆU CỰC HOT 2020!</h4>
                                    <p className="card-text">Điểm chung của cả 5 mẫu đồng này đó là: Cực Hot và luôn luôn Cháy Hàng! 
                                    Đây cũng chính là 5 mẫu đồng hồ thuộc TOP “hoa khôi trong tầm giá 5 - 10 triệu”, được anh em đam mê đồng hồ vô cùng săn đón!</p></a>
                                   
            
                                </div>
                    
                            </div>
                            <div className="card mb-4">
                                <img className="card-img-top" src="https://www.dangquangwatch.vn/lib/ckfinder/images/nu-cuoi-doi-iphone12-tab.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <a href="#"> <h4 className="card-title">DQW Đổi nụ cười lấy Iphone 12 – Bạn có muốn thử?</h4>
                                    <p className="card-text">Trong khi Iphone 12 chính hãng vẫn đang khiến các tín đồ “Mê Táo” chao đảo 
                                    săn lùng với mức giá khá cao, để mua hàng còn cần phải đặt trước, phải xếp hàng thì tại Đăng Quang Watch 
                                    sở hữu siêu phẩm Iphone đời mới nhất chưa bao giờ dễ dàng như thế với chương trình khuyến mại cực kì hấp 
                                    dẫn “Bạn cười may mắn sẽ ở bên bạn”</p></a>
                                   
            
                                </div>
                    
                            </div>
                            {/* Pagination */}
                            <ul className="pagination justify-content-center mb-4">
                                <li className="page-item">
                                    <a className="page-link" href="#">← Older</a>
                                </li>
                                <li className="page-item disabled">
                                    <a className="page-link" href="#">Newer →</a>
                                </li>
                            </ul>
                        </div>
                        {/* Sidebar Widgets Column */}
                        <div className="col-md-5">
                            {/* Search Widget */}
                            
                            {/* Categories Widget */}
                            <div className="card my-4">
                                <h5 className="card-header font-weight-bold">Hỏi đáp về đồng hồ</h5>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <ul className="list-unstyled mb-0">
                                            <a  href="#"><img src="https://xwatch.vn/images/news/2020/07/29/original/67_1595997176.jpg" width="370"></img>
                                        <h6 className="font-weight-bold">CÁCH PHÂN BIỆT ĐỒNG HỒ OP THẬT - GIẢ CHỈ VỚI 5 BƯỚC</h6>
                                        </a>
                                        <hr/>
                                                <li>
                                                    <a href="#">Hỏi đáp về đồng hồ: Mặt kính đồng hồ đeo tay có bao nhiêu loại?</a>
                                                </li>
                                                <hr/>
                                                <li>
                                                    <a href="#">Đồng hồ Hublot thật - giả? Tất cả sẽ được làm sáng...</a>
                                                </li>
                                                <hr/>
                                                <li>
                                                    <a href="#">Cách phân biệt đồng hồ nam hàng hiệu chính hãng và...</a>
                                                </li>
                                                <hr/>
                                                

                                            </ul>
                                        </div>
                                   
                                    </div>
                                </div>
                            </div>
                            
                            {/* Side Widget */}
                            <div className="card my-4">
                                <h5 className="card-header font-weight-bold">Tin tức nổi bật</h5>
                                <div className="card-body">
                                    <div className="col-lg-12">
                                        <a  href="#"><img src="https://www.dangquangwatch.vn/lib/ckfinder/images/nu-cuoi-doi-iphone12-tab.jpg" width="370"></img>
                                        <h6>DQW Đổi nụ cười lấy Iphone 12 – Bạn có muốn thử?</h6>
                                        </a>
                                        <hr/>
                                        <a  href="#"><img src="https://xwatch.vn/images/news/2020/11/19/original/bst-citizen-c7-intro_1605781085.jpg" width="370"></img>
                                        <h6>CITIZEN C7: MẪU ĐỒNG HỒ “BOM TẤN” CỦA NĂM 2020!</h6>
                                        </a>
                                        <hr/>
                                        <a  href="#"><img src="https://www.dangquangwatch.vn/lib/ckfinder/images/nu-cuoi-doi-iphone12-tab.jpg" width="370"></img>
                                        <h6>DQW Đổi nụ cười lấy Iphone 12 – Bạn có muốn thử?</h6>
                                        </a>
                                        <hr/>
                                        <a  href="#"><img src="https://www.dangquangwatch.vn/lib/ckfinder/images/nu-cuoi-doi-iphone12-tab.jpg" width="370"></img>
                                        <h6>DQW Đổi nụ cười lấy Iphone 12 – Bạn có muốn thử?</h6>
                                        </a>
                                        <hr/>

                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /.row */}
                </div>


            </div>
        );
    }
}

export default Pagenew;