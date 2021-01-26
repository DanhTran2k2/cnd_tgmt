import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Services from "../Services/Services";
class Checkout_success extends Component {
    render() {
        return (
            <div>
                <div className="box_home_content">
                    <table width="95%" align="center" border={0} cellPadding={4} cellSpacing={0}>
                        <tbody><tr>
                            <td align="center">
                                <img src="https://www.dangquangwatch.vn/view/mua-thanh-cong.jpg" alt="" border={0} style={{ maxWidth: '100%' }} />
                            </td>
                        </tr>
                            <tr>
                                <td align="center" style={{ borderBottom: '1px solid #ccc', padding: '10px', fontSize: '16px' }}>
                                    <p style={{ fontWeight: 'bold', fontSize: '18px' }}>THÔNG TIN ĐƠN HÀNG</p>
                                    <p>Mã đơn hàng: DQ00000</p>
                                    <p>Tổng giá trị đơn hàng: <b>VNĐ</b></p><b>
                                    </b></td>
                            </tr>
                            <tr><td align="center" style={{ display: 'none' }}>
                                <ul id="idList">
                                </ul>
                            </td>
                            </tr>
                            <tr><td align="center" style={{ color: '#000', fontSize: '18px', lineHeight: '26px' }}>
                                Cảm ơn quý khách hàng đã mua hàng trên hệ thống Đăng Quang Watch. <br />
          Chúng tôi sẽ liên hệ tới quý khách hàng trong thời gian sớm nhất.<br /> Chân thành cảm ơn quý khách!<br />
                                <Link style={{ fontStyle: 'italic', textDecoration: 'underline', color: '#ff9c00' }} to="home" rel="home">&lt;--- Quay về trang chủ</Link>   |   <Link style={{ fontStyle: 'italic', textDecoration: 'underline', color: '#ff9c00' }} to="spnam" rel="home">Tiếp tục mua hàng ---&gt;</Link>
                            </td></tr>
                        </tbody></table>
                </div>
                <Services/>
                
            </div>
        );
    }
}

export default Checkout_success;