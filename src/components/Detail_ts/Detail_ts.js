import React, { Component } from 'react';
import Recoment from "../Recoment/Recoment";
import './css.css';
import phone from "./phone.png";
class Detail_ts extends Component {
    render() {
        return (
            <div>
                
                <div className="row">
                    <div className="col-8">
                        <Recoment />
                        <div className="card mt-3 tab-card">
                            <div className="card-header tab-card-header cardhd">
                                <ul className="nav nav-tabs card-header-tabs " id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link " id="one-tab" data-toggle="tab" href="#one" role="tab" aria-controls="One" aria-selected="true">Mô tả chi tiết</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="two-tab" data-toggle="tab" href="#two" role="tab" aria-controls="Two" aria-selected="false">Chế độ bảo hành</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="three-tab" data-toggle="tab" href="#three" role="tab" aria-controls="Three" aria-selected="false">Hướng dẫn sử dụng</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active p-3" id="one" role="tabpanel" aria-labelledby="one-tab">
                                    <div className="col">
                                        <h4><span style={{fontSize: '18px'}}>
                                            <strong>Đồng hồ Jacques Lemans JL-1-1654.2ZD </strong></span></h4>
                                        <img src="https://www.dangquangwatch.vn/lib/ckfinder/images/JL-1654_2ZD.jpg"  width={400} height={350} ></img>
                                       

                                    </div>
                                </div>
                                <div className="tab-pane fade p-3" id="two" role="tabpanel" aria-labelledby="two-tab">
                                    <div className="baohanh">
                                      
                                        <h6><strong>1. Chính sách bảo hành:</strong></h6>
                                        <ol style={{ listStyleType: 'lower-roman' }}>
                                            <li><span style={{ fontSize: '14px' }}>Đồng hồ được bảo hành từ 1-10 năm kể từ ngày mua theo quy định của hãng sản xuất (tùy từng hãng sẽ có thời gian bảo hành khác nhau).</span></li>
                                            <li><span style={{ fontSize: '14px' }}>Riêng khách hàng mua đồng hồ tại hệ thống Đăng Quang Watch sẽ được hưởng thêm những quyền lợi sau:</span></li>
                                            <li><span style={{ fontSize: '14px' }}>Thay pin miễn phí trọn đời sản phẩm áp dụng&nbsp;đối với 1 số thương hiệu đồng hồ khi mua tại Đăng Quang Watch</span></li>
                                        </ol>
                                        <h6><strong>2. Phạm</strong>&nbsp;<strong>vi tiếp nhận đồng hồ bảo hành và sửa chữa:</strong></h6>
                                        <ol style={{ listStyleType: 'lower-roman' }}>
                                            <li><span style={{ fontSize: '14px' }}>Đăng Quang Watch tiếp nhận bảo hành và sửa chữa đối với tất cả các sản phẩm được mua tại hệ thống </span>Đăng Quang&nbsp;<span style={{ fontSize: '14px' }}>Watch.</span></li>
                                            <li><span style={{ fontSize: '14px' }}>Những sản phẩm mang thương hiệu mà </span>Đăng Quang&nbsp;<span style={{ fontSize: '14px' }}>Watch là nhà phân phối độc quyền tại Việt Nam cũng sẽ tiếp nhận bảo hành và sửa chữa.</span></li>
                                            <li><span style={{ fontSize: '14px' }}>Ngoài những trường hợp nêu trên, </span>Đăng Quang&nbsp;<span style={{ fontSize: '14px' }}>Watch sẽ tiếp nhận đồng hồ để bảo hành hoặc sửa chữa cho quý khách hàng.</span></li>
                                        </ol>
                                        <h6><strong>3. Điều kiện để đồng hồ được bảo hành miễn phí và cách tính phí đối với đồng hồ sửa chữa:</strong></h6>
                                        <ol style={{ listStyleType: 'lower-roman' }}>
                                            <li><span style={{ fontSize: '14px' }}>Nếu đồng hồ mua tại </span>Đăng Quang&nbsp;<span style={{ fontSize: '14px' }}>Watch và còn trong thời gian bảo hành, khách hàng phải xuất trình được những giấy tờ liên quan đến sản phẩm như sổ bảo hành hoặc hóa đơn mua hàng…, khách hàng sẽ được bảo hành miễn phí theo như quy định của hãng sản xuất.</span></li>
                                            <li><span style={{ fontSize: '14px' }}>Nếu đồng hồ hết thời gian bảo hành hoặc Khách hàng không mang theo giấy tờ cần thiết liên quan đến sản phẩm thì Khách hàng sẽ mất phí sửa chữa.</span></li>
                                        </ol>
                                        <h6><strong>4. Phạm vi bảo hành đồng hồ:</strong></h6>
                                        <ol style={{ listStyleType: 'lower-roman' }}>
                                            <li>Đăng Quang&nbsp;<span style={{ fontSize: '14px' }}>Watch chỉ bảo hành các lỗi kỹ thuật về máy (như đồng hồ không chạy, chạy không chính xác), độ chịu nước và pin đồng hồ.</span></li>
                                            <li><span style={{ fontSize: '14px' }}>Nếu đồng hồ gặp các vấn đề về lỗi kỹ thuật như đồng hồ không chạy hoặc chạy không chính xác, hơi nước trên mặt đồng hồ, dây hoặc vỏ đồng hồ bị bong tróc hoặc phai lớp mạ, các lỗi kỹ thuật khác bắt nguồn từ sản phẩm thì </span>Đăng Quang&nbsp;<span style={{ fontSize: '14px' }}>Watch sẽ trực tiếp kiểm tra và đổi mới sản phẩm cho Khách hàng nếu nghiêm trọng.</span></li>
                                        </ol>
                                      
                                    </div>

                               
                                </div>
                                <div className="tab-pane fade p-3" id="three" role="tabpanel" aria-labelledby="three-tab">
                                <div className="baohanh">
                                      
                                      <h6><strong>1. VỆ SINH :</strong></h6>
                                      <ol style={{ listStyleType: 'lower-roman' }}>
                                          <li><span style={{ fontSize: '14px' }}>- Dùng vải ẩm lau sạch sẽ và để khô hoặc dùng xà phòng, dầu oliu làm sạch.</span></li>
                                          <li><span style={{ fontSize: '14px' }}>- Để dây da cùng gói hút ẩm trong hộp kín để khử mùi hôi.</span></li>
                                          <li><span style={{ fontSize: '14px' }}>- Không nên xả nước trực tiếp vào dây da đồng hồ vì sẽ làm dây da thấm nước và kém bền.</span></li>
                                      </ol>
                                      <h6><strong>CÁCH CHỈNH GIỜ ĐỒNG HỒ  2 - 3 KIM</strong></h6>
                                      <ol style={{ listStyleType: 'lower-roman' }}>
                                          <li><span style={{ fontSize: '14px' }}>- Bước 1:  Rút núm chỉnh 1 nấc để chỉnh lịch.</span></li>
                                          <li><span style={{ fontSize: '14px' }}>- Bước 2: Vặn núm chỉnh ngược chiều kim đồng hồ để chỉnh lịch ngày như mong muốn.</span></li>
                                          <li><span style={{ fontSize: '14px' }}>- Bước 3: Rút núm chỉnh thêm 1 nấc nữa để chỉnh giờ - phút.</span></li>
                                          <li><span style={{ fontSize: '14px' }}>- Bước 4: Vặn núm chỉnh để chỉnh tăng - giảm giờ phút như mong muốn.</span></li>
                                          <li><span style={{ fontSize: '14px' }}>- Bước 5: Đẩy núm chỉnh khít lại như ban đầu</span></li>
                                      </ol>
                                    
                                    
                                  </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="tskt">
                            <h4 className="ts-title">Thông số kỹ thuật</h4>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Đường kính mặt</th>
                                        <th>40 mm</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Chống nước</th>
                                        <td>10 ATM</td>
                                    </tr>
                                    <tr>
                                        <th>Chất liệu mặt</th>
                                        <td>Krysterna crystal ( kính cứng )</td>
                                    </tr>
                                    <tr>
                                        <th>Năng lượng sử dụng</th>
                                        <td>Quartz/Pin</td>
                                    </tr>
                                    <tr>
                                        <th>Size dây</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>Chất liệu dây</th>
                                        <td>Dây da chính hãng</td>
                                    </tr>
                                    <tr>
                                        <th>Chất liệu vỏ</th>
                                        <td>Stainless Steel</td>
                                    </tr>
                                    <tr>
                                        <th>Kiểu dáng</th>
                                        <td>Đồng hồ Nam</td>
                                    </tr>
                                    <tr>
                                        <th>Xuất xứ</th>
                                        <td>Áo</td>
                                    </tr>
                                    <tr>
                                        <th>Chế độ bảo hành</th>
                                        <td>Bảo hành quốc tế 02 năm</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="contract">


                        </div>
                    </div>


                </div>
                <br />
                <div className="container">
                    <p className="comment">Bình luận</p>
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-1">
                                    <img src="https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/135832006_1351721115171643_6926765050601732173_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=Iiy3-ER4tLkAX8A5EJ_&_nc_ht=scontent.fdad1-1.fna&oh=d8eb460045793ca798521c34b1f432cd&oe=602D5CE4" className="img img-rounded img-fluid" />

                                </div>
                                <div className="col-md-11">
                                    <p>
                                        <a className="float-left" href="https://maniruzzaman-akash.blogspot.com/p/contact.html"><strong>Maniruzzaman Akash</strong></a>
                                        <span className="float-right"><i className="text-warning fa fa-star" /></span>
                                        <span className="float-right"><i className="text-warning fa fa-star" /></span>
                                        <span className="float-right"><i className="text-warning fa fa-star" /></span>
                                        <span className="float-right"><i className="text-warning fa fa-star" /></span>
                                    </p>
                                    <div className="clearfix" />
                                    <p>okkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                                    <p>
                                        <a className="float-right btn btn-outline-primary ml-2"> <i className="fa fa-reply" /> Reply</a>
                                        <a className="float-right btn text-white btn-danger"> <i className="fa fa-heart" /> Like</a>
                                    </p>
                                </div>
                            </div>
                            <div className="card card-inner">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-1">
                                            <img src="https://image.ibb.co/jw55Ex/def_face.jpg" className="img img-rounded img-fluid" />

                                        </div>
                                        <div className="col-md-11">
                                            <p><a href="https://maniruzzaman-akash.blogspot.com/p/contact.html"><strong>Maniruzzaman Akash</strong></a></p>
                                            <p>OKkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                                            <p>
                                                <a className="float-right btn btn-outline-primary ml-2">  <i className="fa fa-reply" /> Reply</a>
                                                <a className="float-right btn text-white btn-danger"> <i className="fa fa-heart" /> Like</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><br />
                    <p className="danhgia">ĐÁNH GIÁ VÀ BÌNH LUẬN</p>
                    <p>Bấm vào đây để đánh giá sản phẩm</p>
                    <div className="wrap">
                        <div className="stars">
                            <label className="rate">
                                <input type="radio" name="radio1" id="star1" defaultValue="star1" />
                                <div className="face" />
                                <i className="far fa-star star one-star" />
                            </label>
                            <label className="rate">
                                <input type="radio" name="radio1" id="star2" defaultValue="star2" />
                                <div className="face" />
                                <i className="far fa-star star two-star" />
                            </label>
                            <label className="rate">
                                <input type="radio" name="radio1" id="star3" defaultValue="star3" />
                                <div className="face" />
                                <i className="far fa-star star three-star" />
                            </label>
                            <label className="rate">
                                <input type="radio" name="radio1" id="star4" defaultValue="star4" />
                                <div className="face" />
                                <i className="far fa-star star four-star" />
                            </label>
                            <label className="rate">
                                <input type="radio" name="radio1" id="star5" defaultValue="star5" />
                                <div className="face" />
                                <i className="far fa-star star five-star" />
                            </label>
                        </div>
                    </div>

                    <div className="form-group ">
                        <textarea id="form_message" name="message" className="form-control" placeholder="Nhập bình luận" rows={4} required="required" data-error="Please, leave us a message." defaultValue={""} />
                        <div className="help-block with-errors" />

                    </div>
                    <div >
                        <input type="Gửi" className="btn btn-success btn-send" defaultValue="Gửi" />
                    </div>
                    <br />
                </div>
            </div>
        );
    }
}

export default Detail_ts;