import React, { Component } from 'react';
// import './Help.css';
class Help extends Component {
    render() {
        return (
            <div className="container">
                <h2>HỖ TRỢ NGAY</h2>
                <hr/>
                <div className="row">
                    <div className="col-xl-6">
                        <h4  style={{color: 'Tomato'}}>BẠN CẦN HỖ TRỢ NGAY LẬP TỨC?</h4>
                        <p>Vui lòng điền thông tin và nội dung cần hỗ trợ trong bảng bên cạnh. Chúng tôi sẽ phản hồi sớm nhất có thể.</p>
                        <p>Cảm ơn bạn.</p>
                    </div>
                    <div className="col-xl-6">
                        <form id="contact-form" method="post" action="contact.php" role="form">
                            <div className="messages" />
                            <div className="controls">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                          
                                            <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." />
                                            <div className="help-block with-errors" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                          
                                            <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required." />
                                            <div className="help-block with-errors" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                          
                                            <input id="form_email" type="email" name="email" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required." />
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


        );
    }
}

export default Help;
