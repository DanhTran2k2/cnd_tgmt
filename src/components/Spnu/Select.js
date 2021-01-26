import React, { Component } from 'react';

class Select extends Component {
    render() {
        return (


            <div className="card bg-light mb-3">
                <div className="card-header bg-primary text-white text-uppercase"><i className="fa fa-list" /> Lọc theo:</div>
                <div data-role="page">
                    <div data-role="main" className="ui-content">
                        <div data-role="rangeslider">
                            <label style={{color: 'Blue'}} >Khoảng giá:</label>

                        </div>
                        <div>
                            <input type="range" name="price-min" id="price-min" defaultValue={200} min={0} max={1000} />
                            <input type="text" className="form-control" placeholder="500.000" />

                        </div>
                        <hr />
                        <div>
                            <label style={{color: 'Blue'}}>Kiểu đồng hồ:</label>
                        </div>
                        <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                                <label className="form-check-label" htmlFor="exampleRadios1">
                                    Automatic(Tự động)
                                            </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
                                <label className="form-check-label" htmlFor="exampleRadios2">
                                    Quartz (PIN)
                                            </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" defaultValue="option3" />
                                <label className="form-check-label" htmlFor="exampleRadios3">
                                    Digital
                                            </label>
                            </div>
                        <hr />
                        <div>
                            <label>Chất liệu kính:</label>
                            <div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option4" defaultChecked />
                                <label className="form-check-label" htmlFor="exampleRadios2">
                                    Kính sapphire
                                            </label>
                            </div></div>
                            <div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" defaultValue="option5" />
                                <label className="form-check-label" htmlFor="exampleRadios3">
                                    Kính Hardlex
                                            </label>
                            </div></div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" defaultValue="option6" />
                                <label className="form-check-label" htmlFor="exampleRadios4">
                                    Kính cứng khoáng
                                            </label>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <label>Chất liệu dây:</label>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="example" id="exampleRadios5" defaultValue="option7" defaultChecked />
                                <label className="form-check-label" htmlFor="exampleRadios5">
                                    Dây da
                                            </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="example" id="exampleRadios6" defaultValue="option8" />
                                <label className="form-check-label" htmlFor="exampleRadios6">
                                    Dây vải
                                            </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="example" id="exampleRadios7" defaultValue="option9" />
                                <label className="form-check-label" htmlFor="exampleRadios7">
                                    Dây thép
                                            </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="example" id="exampleRadios8" defaultValue="option10" />
                                <label className="form-check-label" htmlFor="exampleRadios8">
                                    Dây cao su
                                            </label>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <label>Màu mặt:</label>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="example" id="exampleRadios9" defaultValue="option11" defaultChecked />
                                <label className="form-check-label" htmlFor="exampleRadios9">
                                    Đen 
                                            </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="example" id="exampleRadios10" defaultValue="option12" />
                                <label className="form-check-label" htmlFor="exampleRadios10">
                                    Vàng 
                                            </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="example" id="exampleRadios11" defaultValue="option13" />
                                <label className="form-check-label" htmlFor="exampleRadios11">
                                    Đỏ
                                            </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="example" id="exampleRadios12" defaultValue="option14" />
                                <label className="form-check-label" htmlFor="exampleRadios12">
                                    Trắng
                                            </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="example" id="exampleRadios13" defaultValue="option15" />
                                <label className="form-check-label" htmlFor="exampleRadios13">
                                    Xanh quân đội
                                            </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="example" id="exampleRadios14" defaultValue="option16" />
                                <label className="form-check-label" htmlFor="exampleRadios14">
                                    Xanh Navy
                                            </label>
                            </div>
                            

                        </div>
                        <hr />
                        <div>
                            <label>Thương hiệu:</label>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="example" id="exampleRadios4" defaultValue="option17" defaultChecked />
                                <label className="form-check-label" htmlFor="exampleRadios4">
                                    BENTLEY
                                            </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="example" id="exampleRadios5" defaultValue="option18" />
                                <label className="form-check-label" htmlFor="exampleRadios5">
                                    CASIO
                                            </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="example" id="exampleRadios6" defaultValue="option19" />
                                <label className="form-check-label" htmlFor="exampleRadios6">
                                    Megir
                                            </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="example" id="exampleRadios6" defaultValue="option20" />
                                <label className="form-check-label" htmlFor="exampleRadios6">
                                    OGIVAL
                                            </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="example" id="exampleRadios6" defaultValue="option21" />
                                <label className="form-check-label" htmlFor="exampleRadios6">
                                    ORIENT
                                            </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="example" id="exampleRadios6" defaultValue="option22" />
                                <label className="form-check-label" htmlFor="exampleRadios6">
                                    RUIMAS
                                            </label>
                            </div>

                        </div>
                        <hr />
                        

                    </div>

                </div>
                <div className="card bg-light mb-3">
                    <div className="card-header bg-success text-white text-uppercase">Last product</div>
                    <div className="card-body">
                        <img className="img-fluid" src="https://dummyimage.com/600x400/55595c/fff" />
                        <h5 className="card-title">Product title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p className="bloc_left_price">99.00 $</p>
                    </div>
                </div>
            </div>


        );
    }
}

export default Select;